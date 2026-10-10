-- Sous-familles tuyauterie et accessoires (alignées catalog-v1-taxonomy.ts)

insert into product_subfamilies (family_id, slug, name, sort_order)
select f.id, v.slug, v.name, v.sort_order
from product_families f
join (
  values
    ('tuyauterie-et-accessoires', 'tubes-acier-carbone', '{"fr": "Tubes acier carbone", "en": "Carbon steel tubes"}', 10),
    ('tuyauterie-et-accessoires', 'tubes-acier-inoxydable', '{"fr": "Tubes acier inoxydable", "en": "Stainless steel tubes"}', 20),
    ('tuyauterie-et-accessoires', 'tubes-carbone-pre-enrobes-3pe', '{"fr": "Tubes carbone pré-enrobés 3PE", "en": "3PE coated carbon steel tubes"}', 30),
    ('tuyauterie-et-accessoires', 'brides-en1092-acier-carbone', '{"fr": "Brides EN 1092 acier carbone", "en": "EN 1092 carbon steel flanges"}', 40),
    ('tuyauterie-et-accessoires', 'brides-asme-b16-5-a105', '{"fr": "Brides ASME B16.5 A105", "en": "ASME B16.5 A105 flanges"}', 50),
    ('tuyauterie-et-accessoires', 'brides-inox-en1092-asme', '{"fr": "Brides inox EN 1092 / ASME", "en": "Stainless EN 1092 / ASME flanges"}', 60),
    ('tuyauterie-et-accessoires', 'brides-acier-galvanise', '{"fr": "Brides acier galvanisé", "en": "Galvanized steel flanges"}', 70),
    ('tuyauterie-et-accessoires', 'brides-a-collerettes', '{"fr": "Brides à collerettes", "en": "Weld neck flanges"}', 80),
    ('tuyauterie-et-accessoires', 'brides-plates', '{"fr": "Brides plates", "en": "Plate flanges"}', 90),
    ('tuyauterie-et-accessoires', 'brides-pleines', '{"fr": "Brides pleines", "en": "Blank flanges"}', 100),
    ('tuyauterie-et-accessoires', 'brides-taraudees', '{"fr": "Brides taraudées", "en": "Threaded flanges"}', 110),
    ('tuyauterie-et-accessoires', 'brides-tournantes', '{"fr": "Brides tournantes", "en": "Loose / rotating flanges"}', 120),
    ('tuyauterie-et-accessoires', 'brides-petrole-asme', '{"fr": "Brides pétrole ASME", "en": "ASME oil & gas flanges"}', 130),
    ('tuyauterie-et-accessoires', 'kit-boulonnerie-equipements-brides', '{"fr": "Kit boulonnerie et équipements brides", "en": "Flange bolting kits & accessories"}', 140),
    ('tuyauterie-et-accessoires', 'collets-forges', '{"fr": "Collets forgés", "en": "Forged fittings / hubs"}', 150),
    ('tuyauterie-et-accessoires', 'raccords-deca', '{"fr": "Raccords DECA", "en": "DECA couplings"}', 160),
    ('tuyauterie-et-accessoires', 'raccords-polypropylene', '{"fr": "Raccords polypropylène", "en": "Polypropylene fittings"}', 170),
    ('tuyauterie-et-accessoires', 'raccords-fonte-malleable', '{"fr": "Raccords fonte malléable", "en": "Malleable iron fittings"}', 180),
    ('tuyauterie-et-accessoires', 'mamelons-et-manchons-acier', '{"fr": "Mamelons et manchons acier", "en": "Steel nipples & couplings"}', 190),
    ('tuyauterie-et-accessoires', 'raccords-inox', '{"fr": "Raccords inox", "en": "Stainless steel fittings"}', 200),
    ('tuyauterie-et-accessoires', 'raccords-laiton-a-visser', '{"fr": "Raccords laiton à visser", "en": "Threaded brass fittings"}', 210),
    ('tuyauterie-et-accessoires', 'raccords-a-cames', '{"fr": "Raccords à cames", "en": "Camlock couplings"}', 220),
    ('tuyauterie-et-accessoires', 'raccords-express', '{"fr": "Raccords express", "en": "Express couplings"}', 230),
    ('tuyauterie-et-accessoires', 'raccords-symetriques', '{"fr": "Raccords symétriques", "en": "Symmetric couplings"}', 240),
    ('tuyauterie-et-accessoires', 'raccords-acier-a-souder', '{"fr": "Raccords acier à souder", "en": "Welded steel fittings"}', 250),
    ('tuyauterie-et-accessoires', 'colliers-de-prise-en-charge', '{"fr": "Colliers de prise en charge", "en": "Tap saddles & repair clamps"}', 260),
    ('tuyauterie-et-accessoires', 'adaptateurs-de-brides-eau', '{"fr": "Adaptateurs de brides eau", "en": "Water network flange adapters"}', 270),
    ('tuyauterie-et-accessoires', 'brides-reseau-eau', '{"fr": "Brides réseau eau", "en": "Water network flanges"}', 280),
    ('tuyauterie-et-accessoires', 'manchons-reseau-eau', '{"fr": "Manchons réseau eau", "en": "Water network couplings"}', 290),
    ('tuyauterie-et-accessoires', 'manchons-compensateurs-elastomere', '{"fr": "Manchons compensateurs élastomère", "en": "Rubber expansion joints"}', 300),
    ('tuyauterie-et-accessoires', 'manchons-compensateurs-teguflex', '{"fr": "Manchons compensateurs TEGUFLEX", "en": "TEGUFLEX expansion joints"}', 310),
    ('tuyauterie-et-accessoires', 'manchons-compensateurs-metalliques', '{"fr": "Manchons compensateurs métalliques", "en": "Metal bellows expansion joints"}', 320),
    ('tuyauterie-et-accessoires', 'manchons-compensateurs-antibruit', '{"fr": "Manchons compensateurs antibruit", "en": "Noise-reducing expansion joints"}', 330)
) as v(family_slug, slug, name, sort_order)
  on f.slug = v.family_slug
on conflict (slug) do update set
  name = excluded.name,
  sort_order = excluded.sort_order;
