

DELETE FROM public.list_master
WHERE id = '16AA1F53-FA2E-435C-8215-C654C5AEC3E6';

DELETE FROM public.list_master
WHERE id = '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9';

DELETE FROM public.list_master
WHERE id = '50D97669-EB51-44D9-879F-A32597114998';

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
	)
VALUES
	(
	'50D97669-EB51-44D9-879F-A32597114998'
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






DELETE FROM public.list_field_map
WHERE id = '6AF7E2EE-C64F-42AD-BBCC-F2D0F5A21B33';

DELETE FROM public.list_field_map
WHERE id = 'FDE15746-4ED8-4FB9-B679-28C2295A0DE7';

DELETE FROM public.list_field_map
WHERE id = '75503CE0-21A7-4AC5-AA85-A176A2E01AAA';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_field_map
WHERE id = 'CCA79626-8933-4610-991B-6C3A5737B066';

DELETE FROM public.list_field_map
WHERE id = '9A9FF57B-1662-4078-BADE-7D7BD29339F7';

DELETE FROM public.list_field_map
WHERE id = '93C2AD26-2098-4865-BEBE-2D2F973FD843';

DELETE FROM public.list_field_map
WHERE id = 'E3EFB721-A275-4E0E-BE8B-76FCA69A364E';

DELETE FROM public.list_field_map
WHERE id = '75503CE0-21A7-4AC5-AA85-A176A2E01AAA';

DELETE FROM public.list_field_map
WHERE id = 'A181F613-C685-4945-9E7C-A3720A1C4823';

DELETE FROM public.list_field_map
WHERE id = '75503CE0-21A7-4AC5-AA85-A176A2E01AAA';

DELETE FROM public.list_field_map
WHERE id = 'FB29E916-964C-4273-A2BA-978D90B15E0A';

DELETE FROM public.list_field_map
WHERE id = '44C7881F-AAC1-4873-9088-E4702B41C7C9';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

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
	)
VALUES
	(
	'2444CF47-D5B5-412B-9735-4A55DCAEA81C'
	);

INSERT INTO public.list_field_map
	(
	id
	)
VALUES
	(
	'2444CF47-D5B5-412B-9735-4A55DCAEA81C'
	);

INSERT INTO public.list_field_map
	(
	id
	)
VALUES
	(
	'2444CF47-D5B5-412B-9735-4A55DCAEA81C'
	);

INSERT INTO public.list_field_map
	(
	id
	)
VALUES
	(
	'2444CF47-D5B5-412B-9735-4A55DCAEA81C'
	);

INSERT INTO public.list_field_map
	(
	id
	)
VALUES
	(
	'2444CF47-D5B5-412B-9735-4A55DCAEA81C'
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
	, 'Bank Tranfer'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'Bank Tranfer'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);



ALTER TABLE public.categories
ADD COLUMN category_level VARCHAR(50);








DELETE FROM public.categories
WHERE id = 'A101983D-D478-456E-9D91-9B732F82CF01';

DELETE FROM public.categories
WHERE id = 'A101983D-D478-456E-9D91-9B732F82CF02';

DELETE FROM public.categories
WHERE id = 'A101983D-D478-456E-9D91-9B732F82CF03';

DELETE FROM public.categories
WHERE id = 'A101983D-D478-456E-9D91-9B732F82CF04';

DELETE FROM public.categories
WHERE id = 'A101983D-D478-456E-9D91-9B732F82CF05';

DELETE FROM public.categories
WHERE id = 'A101983D-D478-456E-9D91-9B732F82CF06';

DELETE FROM public.categories
WHERE id = '111D3F38-B8EB-417F-8703-247FE3D0288C';

DELETE FROM public.categories
WHERE id = '3A49E119-1F8B-4CC1-B512-9C9CB6DE664C';

DELETE FROM public.categories
WHERE id = '16B10D69-6591-4008-8C5B-00F35007C757';

DELETE FROM public.categories
WHERE id = 'DECCF2F6-B8C0-44A5-B944-D6C7A03B0C09';

DELETE FROM public.categories
WHERE id = '418DFAA7-A284-4C09-A8B7-9B54413D71DA';

DELETE FROM public.categories
WHERE id = '62AC473C-5EA9-4B54-877E-3B2B37C1BDEA';

DELETE FROM public.categories
WHERE id = '5BD082EE-4CE7-4D22-9D4E-BCA1484C8771';

DELETE FROM public.categories
WHERE id = '71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5';

DELETE FROM public.categories
WHERE id = 'CD041983-5DCC-4D38-A410-F45EA356B72F';

DELETE FROM public.categories
WHERE id = '94A0983D-D478-456E-9D91-9B732F82CFBC';

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'A101983D-D478-456E-9D91-9B732F82CF01'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Utilities'
	, 'Expense'
	, 'zap'
	, '#F59E0B'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'A101983D-D478-456E-9D91-9B732F82CF02'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Housing'
	, 'Expense'
	, 'house'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'A101983D-D478-456E-9D91-9B732F82CF03'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Healthcare'
	, 'Expense'
	, 'heart-pulse'
	, '#EF4444'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'A101983D-D478-456E-9D91-9B732F82CF04'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Travel'
	, 'Expense'
	, 'plane'
	, '#8B5CF6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'A101983D-D478-456E-9D91-9B732F82CF05'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Wallet'
	, 'Expense'
	, 'wallet'
	, '#14B8A6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'A101983D-D478-456E-9D91-9B732F82CF06'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Gifts'
	, 'Expense'
	, 'gift'
	, '#EC4899'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'111D3F38-B8EB-417F-8703-247FE3D0288C'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Salary'
	, 'Income'
	, 'briefcase-business'
	, '#16A34A'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'3A49E119-1F8B-4CC1-B512-9C9CB6DE664C'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Transport'
	, 'Expense'
	, 'car-front'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'16B10D69-6591-4008-8C5B-00F35007C757'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Shopping'
	, 'Expense'
	, 'shopping-cart'
	, '#8B5CF6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'DECCF2F6-B8C0-44A5-B944-D6C7A03B0C09'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Food'
	, 'Expense'
	, 'utensils'
	, '#10B981'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'418DFAA7-A284-4C09-A8B7-9B54413D71DA'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Transfers'
	, 'Transfer'
	, 'arrow-left-right'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'62AC473C-5EA9-4B54-877E-3B2B37C1BDEA'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Freelance'
	, 'Income'
	, 'briefcase'
	, '#EA580C'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'5BD082EE-4CE7-4D22-9D4E-BCA1484C8771'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Others'
	, 'Expense'
	, 'more-horizontal'
	, '#94A3B8'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Entertainment'
	, 'Expense'
	, 'gamepad-2'
	, '#F97316'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'CD041983-5DCC-4D38-A410-F45EA356B72F'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Education'
	, 'Expense'
	, 'graduation-cap'
	, '#2563EB'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	, parent_category_id
	, category_level
	)
VALUES
	(
	'94A0983D-D478-456E-9D91-9B732F82CFBC'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'Personal Care'
	, 'Expense'
	, 'user'
	, '#EC4899'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	, NULL
	, 'Main Category'
	);

