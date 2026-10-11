

DELETE FROM public.list_field_map
WHERE id = '6AF7E2EE-C64F-42AD-BBCC-F2D0F5A21B33';

DELETE FROM public.list_field_map
WHERE id = 'FDE15746-4ED8-4FB9-B679-28C2295A0DE7';

DELETE FROM public.list_field_map
WHERE id = '75503CE0-21A7-4AC5-AA85-A176A2E01AAA';

DELETE FROM public.list_field_map
WHERE id = 'CCA79626-8933-4610-991B-6C3A5737B066';

DELETE FROM public.list_field_map
WHERE id = '9A9FF57B-1662-4078-BADE-7D7BD29339F7';

DELETE FROM public.list_field_map
WHERE id = '93C2AD26-2098-4865-BEBE-2D2F973FD843';

DELETE FROM public.list_field_map
WHERE id = 'E3EFB721-A275-4E0E-BE8B-76FCA69A364E';

DELETE FROM public.list_field_map
WHERE id = 'A181F613-C685-4945-9E7C-A3720A1C4823';

DELETE FROM public.list_field_map
WHERE id = 'FB29E916-964C-4273-A2BA-978D90B15E0A';

DELETE FROM public.list_field_map
WHERE id = '44C7881F-AAC1-4873-9088-E4702B41C7C9';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_master
WHERE id = '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9';

DELETE FROM public.list_master
WHERE id = '16AA1F53-FA2E-435C-8215-C654C5AEC3E6';

DELETE FROM public.list_master
WHERE id = '50D97669-EB51-44D9-879F-A32597114998';



INSERT INTO public.list_master
	(
	id
	, name
	, type
	, status
	, created_on
	, created_by
	, modified_on
	, modified_by
	, entityname
	)
VALUES
	(
	'3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'payment_method'
	, 'static'
	, 'Active'
	, '2026-10-09 10:56:38.682664'
	, NULL
	, '2026-10-09 10:56:38.682664'
	, NULL
	, ''
	);

INSERT INTO public.list_master
	(
	id
	, name
	, type
	, status
	, created_on
	, created_by
	, modified_on
	, modified_by
	, entityname
	)
VALUES
	(
	'16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'categories'
	, 'static'
	, 'Active'
	, '2026-10-09 10:56:38.682664'
	, NULL
	, '2026-10-09 10:56:38.682664'
	, NULL
	, ''
	);

INSERT INTO public.list_master
	(
	id
	, name
	, type
	, status
	, created_on
	, created_by
	, modified_on
	, modified_by
	, entityname
	)
VALUES
	(
	'50D97669-EB51-44D9-879F-A32597114998'
	, 'transaction_category'
	, 'dynamic'
	, 'Active'
	, '2026-10-09 10:53:26.76819'
	, NULL
	, '2026-10-09 10:53:26.76819'
	, NULL
	, 'v_parent_categories'
	);



INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'6AF7E2EE-C64F-42AD-BBCC-F2D0F5A21B33'
	, 'Expense'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Expense'
	, '0'
	, 1
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'FDE15746-4ED8-4FB9-B679-28C2295A0DE7'
	, 'Income'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Income'
	, '0'
	, 2
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'75503CE0-21A7-4AC5-AA85-A176A2E01AAA'
	, 'Transfer'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Transfer'
	, '0'
	, 3
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'CCA79626-8933-4610-991B-6C3A5737B066'
	, 'Net Banking'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Net Banking'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'9A9FF57B-1662-4078-BADE-7D7BD29339F7'
	, 'Credit Card'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Credit Card'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'93C2AD26-2098-4865-BEBE-2D2F973FD843'
	, 'UPI'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'UPI'
	, '0'
	, 0
	, '2026-10-09 11:08:05.884699'
	, NULL
	, '2026-10-09 11:08:05.884699'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'E3EFB721-A275-4E0E-BE8B-76FCA69A364E'
	, 'Debit Card'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Debit Card'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'A181F613-C685-4945-9E7C-A3720A1C4823'
	, 'Cash'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Cash'
	, '0'
	, 0
	, '2026-10-09 11:06:21.62979'
	, NULL
	, '2026-10-09 11:06:21.62979'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'FB29E916-964C-4273-A2BA-978D90B15E0A'
	, 'Wallet'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Wallet'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'44C7881F-AAC1-4873-9088-E4702B41C7C9'
	, 'Cheque'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Cheque'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);

INSERT INTO public.list_field_map
	(
	id
	, field_id
	, list_id
	, value
	, is_hidden
	, sort_order
	, created_on
	, created_by
	, modified_on
	, modified_by
	, is_default
	)
VALUES
	(
	'2444CF47-D5B5-412B-9735-4A55DCAEA81C'
	, 'Bank Transfer'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Bank Transfer'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);


