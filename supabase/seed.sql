-- SDMI — Données de développement (catalogue robinetterie)
-- Exécution : supabase db reset (local) ou psql après migrations

-- ---------------------------------------------------------------------------
-- Familles
-- ---------------------------------------------------------------------------

insert into public.product_families (slug, name, description, sort_order)
values
  (
    'robinetterie',
    '{"fr":"Robinetterie","en":"Valves & taps"}'::public.localized_text,
    '{"fr":"Vannes, robinets et organes de coupure industriels.","en":"Industrial shut-off and control valves."}'::public.localized_text,
    1
  ),
  (
    'accessoires-tuyauterie',
    '{"fr":"Accessoires de tuyauterie","en":"Piping accessories"}'::public.localized_text,
    '{"fr":"Accessoires pour réseaux de process.","en":"Process piping accessories."}'::public.localized_text,
    2
  ),
  (
    'filtration',
    '{"fr":"Filtration","en":"Filtration"}'::public.localized_text,
    null,
    3
  ),
  (
    'mesure-instrumentation',
    '{"fr":"Mesure & Instrumentation","en":"Measurement & instrumentation"}'::public.localized_text,
    null,
    4
  ),
  (
    'raccords',
    '{"fr":"Raccords","en":"Fittings"}'::public.localized_text,
    null,
    5
  );

-- ---------------------------------------------------------------------------
-- Sous-familles (robinetterie)
-- ---------------------------------------------------------------------------

insert into public.product_subfamilies (family_id, slug, name, sort_order)
select f.id, v.slug, v.name, v.sort_order
from public.product_families f
cross join (
  values
    (
      'vannes-papillon',
      '{"fr":"Vannes papillon","en":"Butterfly valves"}'::public.localized_text,
      1::smallint
    ),
    (
      'vannes-boisseau',
      '{"fr":"Vannes à boisseau sphérique","en":"Ball valves"}'::public.localized_text,
      2::smallint
    ),
    (
      'vannes-guillotine',
      '{"fr":"Vannes à guillotine","en":"Knife gate valves"}'::public.localized_text,
      3::smallint
    ),
    (
      'vannes-clapet',
      '{"fr":"Vannes à clapet","en":"Check valves"}'::public.localized_text,
      4::smallint
    ),
    (
      'vannes-globe',
      '{"fr":"Vannes globe & régulation","en":"Globe & control valves"}'::public.localized_text,
      5::smallint
    )
) as v(slug, name, sort_order)
where f.slug = 'robinetterie';

-- ---------------------------------------------------------------------------
-- Secteurs d'application
-- ---------------------------------------------------------------------------

insert into public.application_sectors (slug, name, sort_order)
values
  (
    'agro-alimentaire',
    '{"fr":"Agro-alimentaire","en":"Food & beverage"}'::public.localized_text,
    1
  ),
  (
    'securite-incendie',
    '{"fr":"Sécurité incendie","en":"Fire protection"}'::public.localized_text,
    2
  ),
  (
    'petrole-gaz',
    '{"fr":"Pétrole & gaz","en":"Oil & gas"}'::public.localized_text,
    3
  ),
  (
    'traitement-eau',
    '{"fr":"Traitement de l''eau","en":"Water treatment"}'::public.localized_text,
    4
  );

-- ---------------------------------------------------------------------------
-- Référentiels techniques
-- ---------------------------------------------------------------------------

insert into public.materials (slug, name, sort_order)
values
  ('fonte-ggg40', '{"fr":"Fonte ductile GGG-40","en":"Ductile iron GGG-40"}'::public.localized_text, 1),
  ('acier-carbone-a105', '{"fr":"Acier carbone A105","en":"Carbon steel A105"}'::public.localized_text, 2),
  ('inox-316', '{"fr":"Inox AISI 316","en":"Stainless steel AISI 316"}'::public.localized_text, 3),
  ('inox-316l', '{"fr":"Inox AISI 316L","en":"Stainless steel AISI 316L"}'::public.localized_text, 4),
  ('laiton-cw614n', '{"fr":"Laiton CW614N","en":"Brass CW614N"}'::public.localized_text, 5),
  ('bronze-rg5', '{"fr":"Bronze RG5","en":"Bronze RG5"}'::public.localized_text, 6);

insert into public.connection_types (slug, name, sort_order)
values
  ('bride-en1092-pn16', '{"fr":"Bridé EN 1092 PN16","en":"Flanged EN 1092 PN16"}'::public.localized_text, 1),
  ('bride-ansi-150', '{"fr":"Bridé ANSI 150 RF","en":"Flanged ANSI 150 RF"}'::public.localized_text, 2),
  ('filetage-bspp', '{"fr":"Filetage BSPP","en":"BSPP threaded"}'::public.localized_text, 3),
  ('soudure-bout-a-bout', '{"fr":"Soudure bout à bout","en":"Butt weld"}'::public.localized_text, 4),
  ('clamp-hygienique-sms', '{"fr":"Clamp hygiénique SMS","en":"SMS hygienic clamp"}'::public.localized_text, 5);

insert into public.standards (slug, name, sort_order)
values
  ('en-593', '{"fr":"EN 593","en":"EN 593"}'::public.localized_text, 1),
  ('api-609', '{"fr":"API 609","en":"API 609"}'::public.localized_text, 2),
  ('iso-5211', '{"fr":"ISO 5211","en":"ISO 5211"}'::public.localized_text, 3),
  ('en-12266-1', '{"fr":"EN 12266-1","en":"EN 12266-1"}'::public.localized_text, 4),
  ('api-6d', '{"fr":"API 6D","en":"API 6D"}'::public.localized_text, 5);

-- ---------------------------------------------------------------------------
-- 15 produits robinetterie
-- ---------------------------------------------------------------------------

with refs as (
  select
    sf.id as subfamily_id,
    sf.slug as subfamily_slug,
    p.reference,
    p.slug,
    p.name,
    p.short_description,
    p.dn,
    p.pn,
    p.body_slug,
    p.trim_slug,
    p.conn_slug,
    p.std_slug,
    p.temp_min,
    p.temp_max,
    p.weight_kg,
    p.sort_order
  from public.product_subfamilies sf
  join public.product_families f on f.id = sf.family_id and f.slug = 'robinetterie'
  cross join (
    values
      (
        'vannes-papillon',
        'SDMI-VP-DN80-PN16-GGG40',
        'sdmi-vp-dn80-pn16-ggg40',
        '{"fr":"Vanne papillon wafer DN80 PN16 fonte EPDM","en":"Wafer butterfly valve DN80 PN16 ductile iron EPDM"}'::public.localized_text,
        '{"fr":"Vanne papillon type wafer, corps fonte ductile, siège EPDM.","en":"Wafer-type butterfly valve, ductile iron body, EPDM seat."}'::public.localized_text,
        80, 16::numeric, 'fonte-ggg40', 'inox-316', 'bride-en1092-pn16', 'en-593', -20, 120, 18.5, 1
      ),
      (
        'vannes-papillon',
        'SDMI-VP-DN150-PN10-316',
        'sdmi-vp-dn150-pn10-316',
        '{"fr":"Vanne papillon lug DN150 PN10 inox 316","en":"Lug butterfly valve DN150 PN10 SS316"}'::public.localized_text,
        '{"fr":"Vanne papillon lug, inox 316, disque poli miroir.","en":"Lug butterfly valve, SS316, mirror-polished disc."}'::public.localized_text,
        150, 10::numeric, 'inox-316', 'inox-316l', 'bride-en1092-pn16', 'api-609', -10, 180, 42.0, 2
      ),
      (
        'vannes-boisseau',
        'SDMI-VB-DN50-PN40-A105',
        'sdmi-vb-dn50-pn40-a105',
        '{"fr":"Vanne à boisseau 2 pcs DN50 PN40 acier","en":"Two-piece ball valve DN50 PN40 carbon steel"}'::public.localized_text,
        '{"fr":"Robinet à boisseau passage intégral, acier carbone A105.","en":"Full bore ball valve, carbon steel A105."}'::public.localized_text,
        50, 40::numeric, 'acier-carbone-a105', 'inox-316', 'bride-en1092-pn16', 'en-12266-1', -29, 200, 12.8, 3
      ),
      (
        'vannes-boisseau',
        'SDMI-VB-DN25-BSPP-316L',
        'sdmi-vb-dn25-bspp-316l',
        '{"fr":"Vanne boisseau 3 pcs DN25 BSPP 316L","en":"Three-piece ball valve DN25 BSPP 316L"}'::public.localized_text,
        '{"fr":"Robinet à boisseau 3 pièces, filetage BSPP, inox 316L.","en":"Three-piece ball valve, BSPP threads, 316L stainless."}'::public.localized_text,
        25, 63::numeric, 'inox-316l', 'inox-316l', 'filetage-bspp', 'iso-5211', -40, 180, 2.4, 4
      ),
      (
        'vannes-boisseau',
        'SDMI-VB-DN100-PN16-316-CLAMP',
        'sdmi-vb-dn100-pn16-316-clamp',
        '{"fr":"Vanne boisseau hygiénique DN100 clamp SMS","en":"Hygienic ball valve DN100 SMS clamp"}'::public.localized_text,
        '{"fr":"Vanne boisseau hygiénique agro, clamp SMS, finition miroir.","en":"Hygienic ball valve for food grade, SMS clamp, mirror finish."}'::public.localized_text,
        100, 16::numeric, 'inox-316l', 'inox-316l', 'clamp-hygienique-sms', 'en-12266-1', -10, 150, 28.6, 5
      ),
      (
        'vannes-guillotine',
        'SDMI-VG-DN200-PN10-GGG40',
        'sdmi-vg-dn200-pn10-ggg40',
        '{"fr":"Vanne à guillotine DN200 PN10 fonte","en":"Knife gate valve DN200 PN10 ductile iron"}'::public.localized_text,
        '{"fr":"Vanne à guillotine bi-directionnelle, eaux chargées.","en":"Bi-directional knife gate valve for slurry service."}'::public.localized_text,
        200, 10::numeric, 'fonte-ggg40', 'inox-316', 'bride-en1092-pn16', 'en-593', -10, 80, 65.0, 6
      ),
      (
        'vannes-guillotine',
        'SDMI-VG-DN150-PN16-316',
        'sdmi-vg-dn150-pn16-316',
        '{"fr":"Vanne guillotine inox DN150 PN16","en":"Stainless knife gate DN150 PN16"}'::public.localized_text,
        '{"fr":"Guillotine inox 316 pour boues et pâteuses.","en":"SS316 knife gate for sludge and viscous media."}'::public.localized_text,
        150, 16::numeric, 'inox-316', 'inox-316', 'bride-en1092-pn16', 'en-593', -20, 120, 48.2, 7
      ),
      (
        'vannes-clapet',
        'SDMI-VC-DN80-PN16-GGG40',
        'sdmi-vc-dn80-pn16-ggg40',
        '{"fr":"Clapet battant DN80 PN16 fonte","en":"Swing check valve DN80 PN16 ductile iron"}'::public.localized_text,
        '{"fr":"Clapet à battant, retenue par gravité, eau potable.","en":"Swing check valve, gravity closure, potable water."}'::public.localized_text,
        80, 16::numeric, 'fonte-ggg40', 'bronze-rg5', 'bride-en1092-pn16', 'en-593', -10, 80, 22.1, 8
      ),
      (
        'vannes-clapet',
        'SDMI-VC-DN50-PN40-A105',
        'sdmi-vc-dn50-pn40-a105',
        '{"fr":"Clapet à ressort DN50 PN40 acier","en":"Spring check valve DN50 PN40 steel"}'::public.localized_text,
        '{"fr":"Clapet à ressort axial, hydrocarbures.","en":"Axial spring check valve, hydrocarbon service."}'::public.localized_text,
        50, 40::numeric, 'acier-carbone-a105', 'inox-316', 'bride-ansi-150', 'api-6d', -29, 200, 8.7, 9
      ),
      (
        'vannes-clapet',
        'SDMI-VC-DN100-PN16-316L',
        'sdmi-vc-dn100-pn16-316l',
        '{"fr":"Clapet wafer DN100 PN16 inox 316L","en":"Wafer check valve DN100 PN16 316L"}'::public.localized_text,
        '{"fr":"Clapet dual plate wafer, installation compacte.","en":"Dual plate wafer check valve, compact installation."}'::public.localized_text,
        100, 16::numeric, 'inox-316l', 'inox-316l', 'bride-en1092-pn16', 'en-12266-1', -20, 180, 14.3, 10
      ),
      (
        'vannes-globe',
        'SDMI-VGLO-DN40-PN40-A105',
        'sdmi-vglo-dn40-pn40-a105',
        '{"fr":"Vanne globe DN40 PN40 acier","en":"Globe valve DN40 PN40 carbon steel"}'::public.localized_text,
        '{"fr":"Vanne globe à soufflet, étanchéité renforcée.","en":"Bellows-sealed globe valve for tight shut-off."}'::public.localized_text,
        40, 40::numeric, 'acier-carbone-a105', 'inox-316', 'bride-en1092-pn16', 'en-12266-1', -29, 425, 19.5, 11
      ),
      (
        'vannes-globe',
        'SDMI-VGLO-DN25-PN16-LAITON',
        'sdmi-vglo-dn25-pn16-laiton',
        '{"fr":"Vanne globe laiton DN25 PN16","en":"Brass globe valve DN25 PN16"}'::public.localized_text,
        '{"fr":"Vanne globe laiton pour réseaux auxiliaires.","en":"Brass globe valve for utility networks."}'::public.localized_text,
        25, 16::numeric, 'laiton-cw614n', 'laiton-cw614n', 'filetage-bspp', 'iso-5211', -20, 120, 1.8, 12
      ),
      (
        'vannes-boisseau',
        'SDMI-VB-DN150-PN16-A105-FIRE',
        'sdmi-vb-dn150-pn16-a105-fire',
        '{"fr":"Vanne boisseau incendie DN150 PN16","en":"Fire service ball valve DN150 PN16"}'::public.localized_text,
        '{"fr":"Robinet à boisseau pour réseau incendie, levier OS&Y.","en":"Ball valve for fire mains, OS&Y lever."}'::public.localized_text,
        150, 16::numeric, 'acier-carbone-a105', 'inox-316', 'bride-en1092-pn16', 'en-12266-1', -20, 80, 58.0, 13
      ),
      (
        'vannes-papillon',
        'SDMI-VP-DN300-PN10-GGG40',
        'sdmi-vp-dn300-pn10-ggg40',
        '{"fr":"Vanne papillon grande dimension DN300","en":"Large bore butterfly valve DN300"}'::public.localized_text,
        '{"fr":"Papillon double bridage, station de pompage.","en":"Double-flanged butterfly for pumping station."}'::public.localized_text,
        300, 10::numeric, 'fonte-ggg40', 'inox-316', 'bride-en1092-pn16', 'en-593', -10, 80, 210.0, 14
      ),
      (
        'vannes-boisseau',
        'SDMI-VB-DN80-PN63-A105-TR',
        'sdmi-vb-dn80-pn63-a105-tr',
        '{"fr":"Vanne boisseau DN80 PN63 troncated","en":"Trunnion ball valve DN80 PN63"}'::public.localized_text,
        '{"fr":"Vanne à boisseau trunnion pour gaz et huile.","en":"Trunnion mounted ball valve for gas and oil."}'::public.localized_text,
        80, 63::numeric, 'acier-carbone-a105', 'inox-316', 'bride-ansi-150', 'api-6d', -46, 200, 95.0, 15
      )
  ) as p(
    subfamily_slug,
    reference,
    slug,
    name,
    short_description,
    dn,
    pn,
    body_slug,
    trim_slug,
    conn_slug,
    std_slug,
    temp_min,
    temp_max,
    weight_kg,
    sort_order
  )
  where sf.slug = p.subfamily_slug
)
insert into public.products (
  subfamily_id,
  reference,
  slug,
  name,
  short_description,
  dn,
  pn,
  body_material_id,
  trim_material_id,
  connection_type_id,
  standard_id,
  service_temp_min_c,
  service_temp_max_c,
  weight_kg,
  is_published,
  sort_order
)
select
  r.subfamily_id,
  r.reference,
  r.slug,
  r.name,
  r.short_description,
  r.dn,
  r.pn,
  bm.id,
  tm.id,
  ct.id,
  st.id,
  r.temp_min,
  r.temp_max,
  r.weight_kg,
  true,
  r.sort_order
from refs r
join public.materials bm on bm.slug = r.body_slug
join public.materials tm on tm.slug = r.trim_slug
join public.connection_types ct on ct.slug = r.conn_slug
join public.standards st on st.slug = r.std_slug;

-- ---------------------------------------------------------------------------
-- Secteurs par produit
-- ---------------------------------------------------------------------------

insert into public.product_sectors (product_id, sector_id)
select p.id, s.id
from public.products p
join public.application_sectors s on s.slug = any (
  case p.reference
    when 'SDMI-VB-DN150-PN16-A105-FIRE' then array['securite-incendie', 'traitement-eau']
    when 'SDMI-VB-DN100-PN16-316-CLAMP' then array['agro-alimentaire']
    when 'SDMI-VB-DN80-PN63-A105-TR' then array['petrole-gaz']
    when 'SDMI-VC-DN50-PN40-A105' then array['petrole-gaz']
    when 'SDMI-VGLO-DN40-PN40-A105' then array['petrole-gaz', 'traitement-eau']
    when 'SDMI-VP-DN150-PN10-316' then array['agro-alimentaire', 'traitement-eau']
    when 'SDMI-VB-DN25-BSPP-316L' then array['agro-alimentaire', 'traitement-eau']
    when 'SDMI-VC-DN100-PN16-316L' then array['agro-alimentaire', 'traitement-eau']
    when 'SDMI-VP-DN300-PN10-GGG40' then array['traitement-eau']
    when 'SDMI-VG-DN200-PN10-GGG40' then array['traitement-eau']
    else array['traitement-eau']
  end
);

-- ---------------------------------------------------------------------------
-- Photos & documents (chemins fictifs pour l''UI)
-- ---------------------------------------------------------------------------

insert into public.product_photos (product_id, storage_path, alt_text, is_primary, sort_order)
select
  p.id,
  'product-photos/' || p.slug || '/main.webp',
  jsonb_build_object(
    'fr',
    'Photo du produit ' || (p.name ->> 'fr'),
    'en',
    'Product photo ' || (p.name ->> 'en')
  )::public.localized_text,
  true,
  0
from public.products p;

insert into public.product_documents (product_id, kind, storage_path, file_name, title, sort_order)
select
  p.id,
  d.kind::public.document_kind,
  'product-documents/' || p.slug || '/' || d.file_name,
  d.file_name,
  d.title,
  d.sort_order
from public.products p
cross join (
  values
    (
      'technical_datasheet',
      'fiche-technique.pdf',
      '{"fr":"Fiche technique","en":"Technical datasheet"}'::public.localized_text,
      1
    ),
    (
      'dimension_drawing',
      'plan-cote.pdf',
      '{"fr":"Plan coté","en":"Dimension drawing"}'::public.localized_text,
      2
    )
) as d(kind, file_name, title, sort_order);

-- Certificats sur une sélection
insert into public.product_documents (product_id, kind, storage_path, file_name, title, sort_order)
select
  p.id,
  'material_certificate_3_1'::public.document_kind,
  'product-documents/' || p.slug || '/certificat-3.1.pdf',
  'certificat-3.1.pdf',
  '{"fr":"Certificat matière 3.1","en":"Material certificate 3.1"}'::public.localized_text,
  3
from public.products p
where p.body_material_id in (
  select id from public.materials where slug in ('inox-316', 'inox-316l', 'acier-carbone-a105')
);

-- ---------------------------------------------------------------------------
-- Page d'accueil
-- ---------------------------------------------------------------------------

update public.application_sectors
set image_storage_path = 'home-media/sectors/' || slug || '.webp'
where image_storage_path is null;

update public.product_families
set image_storage_path = 'home-media/families/' || slug || '.webp'
where image_storage_path is null;

insert into public.home_settings (id, hero_image_storage_path, hero_image_alt)
values (
  1,
  'home-media/hero/industrial-valves.webp',
  '{"fr":"Installation de robinetterie industrielle au Sénégal","en":"Industrial valve installation in Senegal"}'::public.localized_text
)
on conflict (id) do update set
  hero_image_storage_path = excluded.hero_image_storage_path,
  hero_image_alt = excluded.hero_image_alt;

insert into public.home_trust_indicators (sort_order, value, translation_key, icon_slug)
values
  (1, '25+', 'years_experience', 'calendar'),
  (2, '15', 'catalog_references', 'package'),
  (3, '48h', 'quote_response', 'clock')
on conflict (translation_key) do nothing;

insert into public.home_key_figures (sort_order, value, translation_key)
values
  (1, '1998', 'founded_year'),
  (2, '500+', 'projects_delivered'),
  (3, '4', 'industry_sectors'),
  (4, '100%', 'local_support')
on conflict (translation_key) do nothing;

insert into public.home_documentation_highlights (sort_order, storage_path, translation_key, icon_slug)
values
  (1, 'home-media/docs/catalogue-general.pdf', 'general_catalog', 'book-open'),
  (2, 'home-media/docs/certifications.zip', 'certifications_pack', 'shield-check'),
  (3, 'home-media/docs/cao-bim.zip', 'cad_bim_library', 'boxes')
on conflict (translation_key) do nothing;

insert into public.client_logos (name, logo_storage_path, sort_order)
values
  ('Senelec', 'client-logos/senelec.svg', 1),
  ('Petrosen', 'client-logos/petrosen.svg', 2),
  ('Sangomar', 'client-logos/sangomar.svg', 3),
  ('SETEC Energy', 'client-logos/setec.svg', 4),
  ('Ciments du Sahel', 'client-logos/ciments-sahel.svg', 5),
  ('ICS Industries', 'client-logos/ics.svg', 6);
