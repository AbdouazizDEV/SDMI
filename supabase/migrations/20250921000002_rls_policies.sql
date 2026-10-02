-- SDMI — Row Level Security

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  );
$$;

create or replace function public.is_staff_or_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role in ('admin', 'staff')
  );
$$;

comment on function public.is_admin is
  'True si l''utilisateur connecté a le rôle admin (gestion catalogue + devis).';

-- ---------------------------------------------------------------------------
-- Activer RLS
-- ---------------------------------------------------------------------------

alter table public.profiles enable row level security;
alter table public.product_families enable row level security;
alter table public.product_subfamilies enable row level security;
alter table public.application_sectors enable row level security;
alter table public.materials enable row level security;
alter table public.connection_types enable row level security;
alter table public.standards enable row level security;
alter table public.products enable row level security;
alter table public.product_sectors enable row level security;
alter table public.product_photos enable row level security;
alter table public.product_documents enable row level security;
alter table public.quote_requests enable row level security;
alter table public.quote_request_lines enable row level security;

-- ---------------------------------------------------------------------------
-- Profils : lecture / mise à jour de son propre profil ; admins voient tout
-- ---------------------------------------------------------------------------

create policy "profiles_select_own_or_admin"
  on public.profiles
  for select
  to authenticated
  using (id = auth.uid() or public.is_admin());

create policy "profiles_update_own"
  on public.profiles
  for update
  to authenticated
  using (id = auth.uid())
  with check (id = auth.uid());

create policy "profiles_admin_manage_roles"
  on public.profiles
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- Catalogue : lecture publique (produits publiés + taxonomie / référentiels)
-- ---------------------------------------------------------------------------

create policy "catalog_families_public_read"
  on public.product_families
  for select
  to anon, authenticated
  using (true);

create policy "catalog_subfamilies_public_read"
  on public.product_subfamilies
  for select
  to anon, authenticated
  using (true);

create policy "catalog_sectors_public_read"
  on public.application_sectors
  for select
  to anon, authenticated
  using (true);

create policy "catalog_materials_public_read"
  on public.materials
  for select
  to anon, authenticated
  using (true);

create policy "catalog_connection_types_public_read"
  on public.connection_types
  for select
  to anon, authenticated
  using (true);

create policy "catalog_standards_public_read"
  on public.standards
  for select
  to anon, authenticated
  using (true);

create policy "catalog_products_public_read"
  on public.products
  for select
  to anon, authenticated
  using (
    is_published = true
    or public.is_staff_or_admin()
  );

create policy "catalog_product_sectors_public_read"
  on public.product_sectors
  for select
  to anon, authenticated
  using (
    exists (
      select 1
      from public.products p
      where p.id = product_id
        and (p.is_published = true or public.is_staff_or_admin())
    )
  );

create policy "catalog_product_photos_public_read"
  on public.product_photos
  for select
  to anon, authenticated
  using (
    exists (
      select 1
      from public.products p
      where p.id = product_id
        and (p.is_published = true or public.is_staff_or_admin())
    )
  );

create policy "catalog_product_documents_public_read"
  on public.product_documents
  for select
  to anon, authenticated
  using (
    exists (
      select 1
      from public.products p
      where p.id = product_id
        and (p.is_published = true or public.is_staff_or_admin())
    )
  );

-- Écriture catalogue : admins uniquement
create policy "catalog_families_admin_write"
  on public.product_families
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_subfamilies_admin_write"
  on public.product_subfamilies
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_sectors_admin_write"
  on public.application_sectors
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_materials_admin_write"
  on public.materials
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_connection_types_admin_write"
  on public.connection_types
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_standards_admin_write"
  on public.standards
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_products_admin_write"
  on public.products
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_product_sectors_admin_write"
  on public.product_sectors
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_product_photos_admin_write"
  on public.product_photos
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "catalog_product_documents_admin_write"
  on public.product_documents
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- Devis : insertion publique, lecture / mise à jour réservées aux admins
-- ---------------------------------------------------------------------------

create policy "quote_requests_public_insert"
  on public.quote_requests
  for insert
  to anon, authenticated
  with check (
    consent_personal_data = true
    and status = 'pending'
  );

create policy "quote_requests_admin_select"
  on public.quote_requests
  for select
  to authenticated
  using (public.is_admin());

create policy "quote_requests_admin_update"
  on public.quote_requests
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "quote_request_lines_public_insert"
  on public.quote_request_lines
  for insert
  to anon, authenticated
  with check (
    exists (
      select 1
      from public.quote_requests qr
      where qr.id = quote_request_id
        and qr.status = 'pending'
    )
  );

create policy "quote_request_lines_admin_select"
  on public.quote_request_lines
  for select
  to authenticated
  using (public.is_admin());

create policy "quote_request_lines_admin_update"
  on public.quote_request_lines
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "quote_request_lines_admin_delete"
  on public.quote_request_lines
  for delete
  to authenticated
  using (public.is_admin());

-- ---------------------------------------------------------------------------
-- Storage (buckets à créer via dashboard ou CLI)
-- product-photos : lecture publique, écriture admin
-- product-documents : lecture publique, écriture admin
-- quote-attachments : lecture admin uniquement, upload via policy insert anon
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values
  ('product-photos', 'product-photos', true),
  ('product-documents', 'product-documents', true),
  ('quote-attachments', 'quote-attachments', false)
on conflict (id) do nothing;

create policy "product_photos_public_read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'product-photos');

create policy "product_photos_admin_write"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'product-photos' and public.is_admin());

create policy "product_photos_admin_update"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'product-photos' and public.is_admin())
  with check (bucket_id = 'product-photos' and public.is_admin());

create policy "product_photos_admin_delete"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'product-photos' and public.is_admin());

create policy "product_documents_public_read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'product-documents');

create policy "product_documents_admin_write"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'product-documents' and public.is_admin());

create policy "product_documents_admin_update"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'product-documents' and public.is_admin())
  with check (bucket_id = 'product-documents' and public.is_admin());

create policy "product_documents_admin_delete"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'product-documents' and public.is_admin());

create policy "quote_attachments_public_insert"
  on storage.objects
  for insert
  to anon, authenticated
  with check (bucket_id = 'quote-attachments');

create policy "quote_attachments_admin_read"
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'quote-attachments' and public.is_admin());

create policy "quote_attachments_admin_delete"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'quote-attachments' and public.is_admin());
