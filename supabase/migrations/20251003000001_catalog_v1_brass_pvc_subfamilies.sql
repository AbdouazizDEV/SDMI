-- Sous-familles vannes à sphère laiton – fonte – PVC (alignées catalog-v1-taxonomy.ts)

insert into product_subfamilies (family_id, slug, name, sort_order)
select f.id, v.slug, v.name, v.sort_order
from product_families f
join (
  values
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-laiton-serena-cw724r-pn40', '{"fr": "Vannes à sphère Laiton Serena CW724R PN40", "en": "Serena CW724R PN40 brass ball valves"}', 10),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-laiton-nf-4ms', '{"fr": "Vannes à sphère Laiton NF 4MS", "en": "NF 4MS brass ball valves"}', 20),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-laiton-batiment-plus-4ms', '{"fr": "Vannes à sphère Laiton Bâtiment+ 4MS", "en": "Bâtiment+ 4MS brass ball valves"}', 30),
    ('vannes-sphere-laiton-fonte-pvc', 'robinets-compteur-laiton-ecrou-tournant', '{"fr": "Robinets de compteur Laiton à écrou tournant", "en": "Brass meter ball valves with swivel nut"}', 40),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-puisage-laiton-inox', '{"fr": "Vannes de puisage Laiton – Inox", "en": "Brass & stainless draw-off valves"}', 50),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-laiton-industrie-cadenassable-demultiplicateur', '{"fr": "Vannes sphère Laiton industrie – Cadenassable – Démultiplicateur", "en": "Industrial brass ball valves — lockable, gear operator"}', 60),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-laiton-sphero-conique', '{"fr": "Vannes à sphère Laiton sphéro-conique", "en": "Brass conical ball valves"}', 70),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-laiton-collecteurs-tetine', '{"fr": "Vannes à sphère Laiton – Pour collecteurs – Avec tétine", "en": "Brass ball valves for manifolds with drain cock"}', 80),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-laiton-3-voies', '{"fr": "Vannes à sphère Laiton 3 voies", "en": "Brass three-way ball valves"}', 90),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-pvc-u', '{"fr": "Vannes à sphère PVC-U", "en": "PVC-U ball valves"}', 100),
    ('vannes-sphere-laiton-fonte-pvc', 'vannes-sphere-a-brides-laiton-fonte', '{"fr": "Vannes à sphère à brides Laiton – Fonte", "en": "Flanged brass & cast iron ball valves"}', 110)
) as v(family_slug, slug, name, sort_order)
  on f.slug = v.family_slug
on conflict (slug) do update set
  name = excluded.name,
  sort_order = excluded.sort_order;
