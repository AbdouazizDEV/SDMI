-- SDMI — Contenu page d'accueil (données éditoriales / médias)

alter table public.application_sectors
  add column if not exists image_storage_path text,
  add column if not exists show_on_home boolean not null default true;

alter table public.product_families
  add column if not exists image_storage_path text;

create table public.home_settings (
  id smallint primary key default 1,
  hero_image_storage_path text not null,
  hero_image_alt public.localized_text not null,
  updated_at timestamptz not null default now(),
  constraint home_settings_singleton check (id = 1)
);

create table public.home_trust_indicators (
  id uuid primary key default gen_random_uuid(),
  sort_order smallint not null default 0,
  value text not null,
  translation_key text not null,
  icon_slug text not null default 'badge-check',
  constraint home_trust_translation_key_format check (translation_key ~ '^[a-z][a-z0-9_]*$')
);

create unique index home_trust_indicators_translation_key_idx
  on public.home_trust_indicators (translation_key);

create table public.home_key_figures (
  id uuid primary key default gen_random_uuid(),
  sort_order smallint not null default 0,
  value text not null,
  translation_key text not null,
  constraint home_key_figures_translation_key_format check (translation_key ~ '^[a-z][a-z0-9_]*$')
);

create unique index home_key_figures_translation_key_idx
  on public.home_key_figures (translation_key);

create table public.home_documentation_highlights (
  id uuid primary key default gen_random_uuid(),
  sort_order smallint not null default 0,
  storage_path text not null,
  translation_key text not null,
  icon_slug text not null default 'file-down',
  constraint home_doc_highlights_translation_key_format check (translation_key ~ '^[a-z][a-z0-9_]*$')
);

create unique index home_documentation_highlights_translation_key_idx
  on public.home_documentation_highlights (translation_key);

create table public.client_logos (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  logo_storage_path text not null,
  sort_order smallint not null default 0,
  is_published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger set_client_logos_updated_at
  before update on public.client_logos
  for each row execute function public.set_updated_at();

create trigger set_home_settings_updated_at
  before update on public.home_settings
  for each row execute function public.set_updated_at();
