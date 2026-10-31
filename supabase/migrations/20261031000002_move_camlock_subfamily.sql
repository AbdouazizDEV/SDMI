-- Rattache les raccords à cames à la famille « raccords-et-fittings ».

insert into public.product_families (slug, name, sort_order)
values (
  'raccords-et-fittings',
  '{"fr": "Raccords et fittings", "en": "Fittings"}'::public.localized_text,
  26
)
on conflict (slug) do nothing;

update public.product_subfamilies as subfamily
set family_id = family.id
from public.product_families as family
where family.slug = 'raccords-et-fittings'
  and subfamily.slug = 'raccords-a-cames';
