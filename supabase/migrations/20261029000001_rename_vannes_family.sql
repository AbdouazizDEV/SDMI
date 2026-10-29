-- Aligne la famille gate/guillotine sur le slug public « vannes ».

update public.product_families
set
  slug = 'vannes',
  name = '{"fr": "Vannes", "en": "Valves"}'::public.localized_text
where slug = 'vannes-operucle-guillotine'
  and not exists (
    select 1
    from public.product_families
    where slug = 'vannes'
  );
