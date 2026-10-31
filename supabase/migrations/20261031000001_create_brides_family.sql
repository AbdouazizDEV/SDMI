-- Famille publique « brides » et rattachement des sous-familles déplacées.

insert into public.product_families (slug, name, sort_order)
values (
  'brides',
  '{"fr": "Brides", "en": "Flanges"}'::public.localized_text,
  25
)
on conflict (slug) do update set
  name = excluded.name,
  sort_order = excluded.sort_order;

update public.product_subfamilies as subfamily
set family_id = family.id
from public.product_families as family
where family.slug = 'brides'
  and subfamily.slug in ('brides-en1092-acier-carbone', 'collets-forges');
