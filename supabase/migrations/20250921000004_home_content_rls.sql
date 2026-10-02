alter table public.home_settings enable row level security;
alter table public.home_trust_indicators enable row level security;
alter table public.home_key_figures enable row level security;
alter table public.home_documentation_highlights enable row level security;
alter table public.client_logos enable row level security;

create policy "home_settings_public_read"
  on public.home_settings for select to anon, authenticated using (true);

create policy "home_trust_public_read"
  on public.home_trust_indicators for select to anon, authenticated using (true);

create policy "home_key_figures_public_read"
  on public.home_key_figures for select to anon, authenticated using (true);

create policy "home_doc_highlights_public_read"
  on public.home_documentation_highlights for select to anon, authenticated using (true);

create policy "client_logos_public_read"
  on public.client_logos for select to anon, authenticated using (is_published = true);

create policy "home_settings_admin_write"
  on public.home_settings for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

create policy "home_trust_admin_write"
  on public.home_trust_indicators for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

create policy "home_key_figures_admin_write"
  on public.home_key_figures for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

create policy "home_doc_highlights_admin_write"
  on public.home_documentation_highlights for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

create policy "client_logos_admin_write"
  on public.client_logos for all to authenticated
  using (public.is_admin()) with check (public.is_admin());

insert into storage.buckets (id, name, public)
values
  ('home-media', 'home-media', true),
  ('client-logos', 'client-logos', true)
on conflict (id) do nothing;

create policy "home_media_public_read"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'home-media');

create policy "home_media_admin_write"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'home-media' and public.is_admin());

create policy "client_logos_storage_public_read"
  on storage.objects for select to anon, authenticated
  using (bucket_id = 'client-logos');

create policy "client_logos_storage_admin_write"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'client-logos' and public.is_admin());
