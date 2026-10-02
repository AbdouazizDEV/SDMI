-- Gammes catalogue (série configurable) + attributs techniques jsonb

create type public.product_listing_kind as enum ('range', 'sku');

alter table public.products
  add column if not exists listing_kind public.product_listing_kind not null default 'sku',
  add column if not exists range_code text,
  add column if not exists technical_specs jsonb not null default '{}'::jsonb,
  add column if not exists quote_on_configuration boolean not null default false;

comment on column public.products.listing_kind is 'range = gamme par série (DN/PN selon config) ; sku = référence figée';
comment on column public.products.range_code is 'Code série fabricant ex. 111, 115';
comment on column public.products.technical_specs is 'Filtres avancés : classe pression, trim, raccord, fluides, ATEX…';
comment on column public.products.quote_on_configuration is 'Cotation sur plan / DN / classe';

create index if not exists products_listing_kind_idx on public.products (listing_kind);
create index if not exists products_range_code_idx on public.products (range_code) where range_code is not null;
create index if not exists products_technical_specs_gin on public.products using gin (technical_specs);
