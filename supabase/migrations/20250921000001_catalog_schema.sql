-- SDMI — Schéma catalogue & devis
-- Extensions
create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Types énumérés
-- ---------------------------------------------------------------------------

create type public.document_kind as enum (
  'technical_datasheet',
  'dimension_drawing',
  'material_certificate_3_1',
  'ce_declaration'
);

create type public.quote_request_status as enum (
  'pending',
  'in_review',
  'quoted',
  'closed',
  'rejected'
);

create type public.quote_line_unit as enum (
  'piece',
  'pair',
  'set',
  'meter',
  'kilogram',
  'lot'
);

create type public.user_role as enum ('admin', 'staff');

-- ---------------------------------------------------------------------------
-- Libellés bilingues (FR + EN obligatoires)
-- ---------------------------------------------------------------------------

create domain public.localized_text as jsonb
constraint localized_text_shape check (
  jsonb_typeof(value) = 'object'
  and value ? 'fr'
  and value ? 'en'
  and length(trim(both from value ->> 'fr')) > 0
  and length(trim(both from value ->> 'en')) > 0
);

comment on domain public.localized_text is
  'Objet JSON {"fr":"…","en":"…"} pour tous les libellés affichables.';

-- ---------------------------------------------------------------------------
-- Admin / profils (liés à auth.users)
-- ---------------------------------------------------------------------------

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role public.user_role not null default 'staff',
  full_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is
  'Profils back-office ; seuls admin/staff peuvent modifier le catalogue.';

-- ---------------------------------------------------------------------------
-- Taxonomie produit
-- ---------------------------------------------------------------------------

create table public.product_families (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name public.localized_text not null,
  description public.localized_text,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint product_families_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

create table public.product_subfamilies (
  id uuid primary key default gen_random_uuid(),
  family_id uuid not null references public.product_families (id) on delete restrict,
  slug text not null,
  name public.localized_text not null,
  description public.localized_text,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint product_subfamilies_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  unique (family_id, slug)
);

create index product_subfamilies_family_id_idx on public.product_subfamilies (family_id);

-- ---------------------------------------------------------------------------
-- Secteurs d''application
-- ---------------------------------------------------------------------------

create table public.application_sectors (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name public.localized_text not null,
  description public.localized_text,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint application_sectors_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$')
);

-- ---------------------------------------------------------------------------
-- Référentiels filtrables (évite les variantes d''orthographe en facette)
-- ---------------------------------------------------------------------------

create table public.materials (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name public.localized_text not null,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.connection_types (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name public.localized_text not null,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.standards (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name public.localized_text not null,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Produits
-- ---------------------------------------------------------------------------

create table public.products (
  id uuid primary key default gen_random_uuid(),
  subfamily_id uuid not null references public.product_subfamilies (id) on delete restrict,
  reference text not null,
  slug text not null unique,
  name public.localized_text not null,
  short_description public.localized_text,
  description public.localized_text,
  -- Caractéristiques techniques filtrables
  dn integer,
  pn numeric(8, 2),
  body_material_id uuid references public.materials (id) on delete set null,
  trim_material_id uuid references public.materials (id) on delete set null,
  connection_type_id uuid references public.connection_types (id) on delete set null,
  standard_id uuid references public.standards (id) on delete set null,
  service_temp_min_c integer,
  service_temp_max_c integer,
  weight_kg numeric(10, 3),
  is_published boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint products_reference_unique unique (reference),
  constraint products_reference_format check (reference ~ '^[A-Z0-9][A-Z0-9\-./]+$'),
  constraint products_slug_format check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  constraint products_dn_positive check (dn is null or dn > 0),
  constraint products_pn_positive check (pn is null or pn > 0),
  constraint products_weight_positive check (weight_kg is null or weight_kg > 0),
  constraint products_temp_range check (
    service_temp_min_c is null
    or service_temp_max_c is null
    or service_temp_min_c <= service_temp_max_c
  )
);

create index products_subfamily_id_idx on public.products (subfamily_id);
create index products_published_idx on public.products (is_published) where is_published = true;
create index products_dn_idx on public.products (dn);
create index products_pn_idx on public.products (pn);
create index products_body_material_idx on public.products (body_material_id);
create index products_trim_material_idx on public.products (trim_material_id);
create index products_connection_type_idx on public.products (connection_type_id);
create index products_standard_idx on public.products (standard_id);

create table public.product_sectors (
  product_id uuid not null references public.products (id) on delete cascade,
  sector_id uuid not null references public.application_sectors (id) on delete cascade,
  primary key (product_id, sector_id)
);

create index product_sectors_sector_id_idx on public.product_sectors (sector_id);

-- ---------------------------------------------------------------------------
-- Médias catalogue (chemins Storage Supabase)
-- ---------------------------------------------------------------------------

create table public.product_photos (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products (id) on delete cascade,
  storage_path text not null,
  alt_text public.localized_text not null,
  is_primary boolean not null default false,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (product_id, storage_path)
);

create index product_photos_product_id_idx on public.product_photos (product_id);

create unique index product_photos_one_primary_per_product
  on public.product_photos (product_id)
  where is_primary = true;

create table public.product_documents (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products (id) on delete cascade,
  kind public.document_kind not null,
  storage_path text not null,
  file_name text not null,
  title public.localized_text,
  sort_order smallint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (product_id, storage_path)
);

create index product_documents_product_id_idx on public.product_documents (product_id);
create index product_documents_kind_idx on public.product_documents (kind);

-- ---------------------------------------------------------------------------
-- Demandes de devis
-- ---------------------------------------------------------------------------

create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  status public.quote_request_status not null default 'pending',
  locale text not null default 'fr',
  company_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  country text not null default 'SN',
  message text,
  attachment_storage_path text,
  consent_personal_data boolean not null,
  consent_recorded_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint quote_requests_email_format check (
    email ~* '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$'
  ),
  constraint quote_requests_consent_required check (consent_personal_data = true),
  constraint quote_requests_locale_check check (locale in ('fr', 'en'))
);

create index quote_requests_status_idx on public.quote_requests (status);
create index quote_requests_created_at_idx on public.quote_requests (created_at desc);

create table public.quote_request_lines (
  id uuid primary key default gen_random_uuid(),
  quote_request_id uuid not null references public.quote_requests (id) on delete cascade,
  product_id uuid not null references public.products (id) on delete restrict,
  quantity numeric(12, 3) not null,
  unit public.quote_line_unit not null default 'piece',
  line_notes text,
  created_at timestamptz not null default now(),
  constraint quote_request_lines_quantity_positive check (quantity > 0)
);

create index quote_request_lines_quote_request_id_idx
  on public.quote_request_lines (quote_request_id);

-- ---------------------------------------------------------------------------
-- updated_at automatique
-- ---------------------------------------------------------------------------

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

create trigger set_product_families_updated_at
  before update on public.product_families
  for each row execute function public.set_updated_at();

create trigger set_product_subfamilies_updated_at
  before update on public.product_subfamilies
  for each row execute function public.set_updated_at();

create trigger set_application_sectors_updated_at
  before update on public.application_sectors
  for each row execute function public.set_updated_at();

create trigger set_materials_updated_at
  before update on public.materials
  for each row execute function public.set_updated_at();

create trigger set_connection_types_updated_at
  before update on public.connection_types
  for each row execute function public.set_updated_at();

create trigger set_standards_updated_at
  before update on public.standards
  for each row execute function public.set_updated_at();

create trigger set_products_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

create trigger set_product_photos_updated_at
  before update on public.product_photos
  for each row execute function public.set_updated_at();

create trigger set_product_documents_updated_at
  before update on public.product_documents
  for each row execute function public.set_updated_at();

create trigger set_quote_requests_updated_at
  before update on public.quote_requests
  for each row execute function public.set_updated_at();

-- Profil créé à l''inscription auth (back-office)
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, role)
  values (new.id, 'staff')
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
