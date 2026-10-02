-- Taxonomie catalogue v1 (squelette livraison 1) — sans produits.
-- Les slugs doivent rester alignés avec lib/catalog/catalog-v1-taxonomy.ts

insert into product_families (slug, name, sort_order)
values
  ('robinetterie-petrole-forgee-moulee', '{"fr": "Robinetterie pétrole forgée – moulée", "en": "Forged & cast petroleum valves"}', 10),
  ('tuyauterie-et-accessoires', '{"fr": "Tuyauterie et accessoires", "en": "Piping & accessories"}', 20),
  ('vannes-operucle-guillotine', '{"fr": "Vannes à opercule – vannes à guillotine", "en": "Gate & knife gate valves"}', 30),
  ('robinets-papillon', '{"fr": "Robinets à papillon", "en": "Butterfly valves"}', 40),
  ('robinets-tournant-spherique-acier-inox', '{"fr": "Robinets à tournant sphérique acier – inox", "en": "Steel & stainless ball valves"}', 50),
  ('vannes-sphere-laiton-fonte-pvc', '{"fr": "Vannes à sphère laiton – fonte – PVC", "en": "Brass, cast iron & PVC ball valves"}', 60)
on conflict (slug) do update set
  name = excluded.name,
  sort_order = excluded.sort_order;

insert into product_subfamilies (family_id, slug, name, sort_order)
select f.id, v.slug, v.name, v.sort_order
from product_families f
join (
  values
    ('robinetterie-petrole-forgee-moulee', 'vannes-operucle-petrole-forge-moule', '{"fr": "Vannes à opercule pétrole forgé – moulé", "en": "Forged & cast petroleum gate valves"}', 10),
    ('robinetterie-petrole-forgee-moulee', 'robinets-petrole-soufflet-soupapes-forge-moule', '{"fr": "Robinets pétrole à soufflet et à soupapes forgé – moulé", "en": "Forged & cast petroleum bellows & globe valves"}', 20),
    ('robinetterie-petrole-forgee-moulee', 'robinets-pointeau-petrole-forge-moule', '{"fr": "Robinets à pointeau pétrole forgé – moulé", "en": "Forged & cast petroleum needle valves"}', 30),
    ('robinetterie-petrole-forgee-moulee', 'filtres-petrole-forge-moule', '{"fr": "Filtres pétrole forgé – moulé", "en": "Forged & cast petroleum strainers"}', 40),
    ('robinetterie-petrole-forgee-moulee', 'clapets-petrole-forge-moule', '{"fr": "Clapets pétrole forgé – moulé", "en": "Forged & cast petroleum check valves"}', 50)
) as v(family_slug, slug, name, sort_order)
  on f.slug = v.family_slug
on conflict (family_id, slug) do update set
  name = excluded.name,
  sort_order = excluded.sort_order;
