DELETE FROM public.list_master
WHERE id = '04BE7C7D-5D1C-4307-884B-6CDE8789DA2C';

INSERT INTO public.list_master (id, name, type, status, entityname, created_on, created_by, modified_on, modified_by)
VALUES ('04BE7C7D-5D1C-4307-884B-6CDE8789DA2C', 'Billing Cycle', 'static', 'active', 'billing_cycle', '2026-10-12 16:36:56.123731', NULL, '2026-10-12 16:36:56.123731', NULL);

DELETE FROM public.list_field_map
WHERE id = 'FDA31BAF-9377-4A0A-A137-3BC71E1725D6';

DELETE FROM public.list_field_map
WHERE id = '152FCB0A-CFE5-4DBC-8276-50FC5FF58F34';

INSERT INTO public.list_field_map (id, field_id, list_id, value, is_hidden, sort_order, created_on, created_by, modified_on, modified_by, is_default)
VALUES ('FDA31BAF-9377-4A0A-A137-3BC71E1725D6', 'Monthly', '04BE7C7D-5D1C-4307-884B-6CDE8789DA2C', 'Monthly', '0', 1, '2026-10-12 16:38:43.397838', NULL, '2026-10-12 16:38:43.397838', NULL, '1');

INSERT INTO public.list_field_map (id, field_id, list_id, value, is_hidden, sort_order, created_on, created_by, modified_on, modified_by, is_default)
VALUES ('152FCB0A-CFE5-4DBC-8276-50FC5FF58F34', 'Yearly', '04BE7C7D-5D1C-4307-884B-6CDE8789DA2C', 'Yealy', '0', 2, '2026-10-12 16:38:43.397838', NULL, '2026-10-12 16:38:43.397838', NULL, '0');

