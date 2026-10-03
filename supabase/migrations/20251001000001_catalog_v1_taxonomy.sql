-- Taxonomie catalogue v1 (squelette livraison 1) — sans produits.
-- Les slugs doivent rester alignés avec lib/catalog/catalog-v1-taxonomy.ts

insert into product_families (slug, name, sort_order)
values
  ('robinetterie-petrole-forgee-moulee', '{"fr": "Robinetterie pétrole forgée – moulée", "en": "Forged & cast petroleum valves"}', 10),
  ('tuyauterie-et-accessoires', '{"fr": "Tuyauterie et accessoires", "en": "Piping & accessories"}', 20),
  ('vannes-operucle-guillotine', '{"fr": "Vannes à opercule – vannes à guillotine", "en": "Gate & knife gate valves"}', 30),
  ('robinets-soupape-pointeau', '{"fr": "Robinets à soupape – robinets à pointeau", "en": "Globe & needle valves"}', 40),
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
    ('robinetterie-petrole-forgee-moulee', 'clapets-petrole-forge-moule', '{"fr": "Clapets pétrole forgé – moulé", "en": "Forged & cast petroleum check valves"}', 50),
    ('vannes-operucle-guillotine', 'vannes-opercule-monobloc-fermeture-rapide', '{"fr": "Vannes à opercule monobloc – vannes à fermeture rapide", "en": "Monobloc gate valves — quick closing"}', 10),
    ('vannes-operucle-guillotine', 'vannes-opercule-fonte-brides', '{"fr": "Vannes à opercule fonte à brides", "en": "Cast iron flanged gate valves"}', 20),
    ('vannes-operucle-guillotine', 'vannes-opercule-acier-inox-moule', '{"fr": "Vannes à opercule acier moulé – inox moulé", "en": "Cast steel & cast stainless gate valves"}', 30),
    ('vannes-operucle-guillotine', 'vannes-opercule-forge', '{"fr": "Vannes à opercule forgé", "en": "Forged gate valves"}', 40),
    ('vannes-operucle-guillotine', 'vannes-opercule-caoutchouc-o-gate', '{"fr": "Vannes à opercule caoutchouc O-GATE", "en": "Rubber seated O-GATE gate valves"}', 50),
    ('vannes-operucle-guillotine', 'vannes-guillotine-s-gate-unidirectionnelles', '{"fr": "Vannes à guillotine S-GATE unidirectionnelles", "en": "S-GATE unidirectional knife gate valves"}', 60),
    ('vannes-operucle-guillotine', 'vannes-guillotine-s-gate-bidirectionnelles', '{"fr": "Vannes à guillotine S-GATE bidirectionnelles", "en": "S-GATE bidirectional knife gate valves"}', 70),
    ('vannes-operucle-guillotine', 'vannes-guillotine-s-gate-pelle-traversante', '{"fr": "Vannes à guillotine S-GATE à pelle traversante", "en": "S-GATE through-blade knife gate valves"}', 80),
    ('vannes-operucle-guillotine', 'accessoires-vannes-guillotine', '{"fr": "Accessoires vannes guillotine", "en": "Knife gate valve accessories"}', 90),
    ('robinets-soupape-pointeau', 'robinets-a-soupape', '{"fr": "Robinets à soupape", "en": "Globe valves"}', 10),
    ('robinets-soupape-pointeau', 'robinets-a-pointeau', '{"fr": "Robinets à pointeau", "en": "Needle valves"}', 20),
    ('robinets-soupape-pointeau', 'robinets-incendie-colonne-seche-prise-simple-ou-double', '{"fr": "Robinets incendie colonne sèche prise simple ou double", "en": "Dry riser fire valves — single or double outlet"}', 30),
    ('robinets-soupape-pointeau', 'robinets-pied-de-colonne-perfection-a-flotteur', '{"fr": "Robinets pied de colonne – Perfection – à flotteur", "en": "Column foot, perfection & float valves"}', 40),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-monobloc-inox', '{"fr": "Robinets à tournant sphérique monobloc inox", "en": "Stainless monobloc ball valves"}', 10),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-2-pieces', '{"fr": "Robinets à tournant sphérique 2 pièces", "en": "Two-piece ball valves"}', 20),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-2-pieces-split-body', '{"fr": "Robinets à tournant sphérique 2 pièces à brides Split Body", "en": "Two-piece split body flanged ball valves"}', 30),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-3-pieces', '{"fr": "Robinets à tournant sphérique 3 pièces", "en": "Three-piece ball valves"}', 40),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-3-pieces-brides-elsa', '{"fr": "Robinets à tournant sphérique 3 pièces à brides tournantes ELSA®", "en": "ELSA® three-piece flanged ball valves"}', 50),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-3-pieces-a-brides', '{"fr": "Robinets à tournant sphérique 3 pièces à brides", "en": "Three-piece flanged ball valves"}', 60),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-3-voies', '{"fr": "Robinets à tournant sphérique 3 voies", "en": "Three-way ball valves"}', 70),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-4-voies', '{"fr": "Robinets à tournant sphérique 4 voies", "en": "Four-way ball valves"}', 80),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-wafer-brides-etroit', '{"fr": "Robinets à tournant sphérique Wafer entre brides étroit", "en": "Narrow wafer ball valves"}', 90),
    ('robinets-tournant-spherique-acier-inox', 'robinets-tournant-spherique-sphere-arbree-jc', '{"fr": "Robinets à tournant sphérique sphère arbrée JC", "en": "JC trunnion-mounted ball valves"}', 100)
) as v(family_slug, slug, name, sort_order)
  on f.slug = v.family_slug
on conflict (family_id, slug) do update set
  name = excluded.name,
  sort_order = excluded.sort_order;
