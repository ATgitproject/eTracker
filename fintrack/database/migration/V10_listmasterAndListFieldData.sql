

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
WHERE id = 'DCE55A20-076B-45AE-BE66-80FBA32BE911';

DELETE FROM public.categories
WHERE id = '62AC473C-5EA9-4B54-877E-3B2B37C1BDEA';

DELETE FROM public.categories
WHERE id = '5BD082EE-4CE7-4D22-9D4E-BCA1484C8771';

DELETE FROM public.categories
WHERE id = 'ED6EFCE3-1E6A-4310-8636-A533479EEFB0';

DELETE FROM public.categories
WHERE id = 'C7D51825-D283-4702-B22A-1E5F0498CC9C';

DELETE FROM public.categories
WHERE id = '71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5';

DELETE FROM public.categories
WHERE id = 'CD041983-5DCC-4D38-A410-F45EA356B72F';

DELETE FROM public.categories
WHERE id = '94A0983D-D478-456E-9D91-9B732F82CFBC';

DELETE FROM public.categories
WHERE id = '7D7ABB1D-A7E0-440B-9DAA-9020EB54F1C2';

DELETE FROM public.categories
WHERE id = 'ABDB5ABD-4297-4DA2-B9C1-6F1CC2E50F63';

DELETE FROM public.categories
WHERE id = '6B8D45F6-CE79-4E3C-9521-346D6807E4AC';

DELETE FROM public.categories
WHERE id = '3C89DA0E-6EFB-47E4-9C5E-B4D519FFCB57';

DELETE FROM public.categories
WHERE id = '7F81EE61-C409-4764-836C-8AD865D0E11A';

DELETE FROM public.categories
WHERE id = '0EE2E0C4-44D4-4D93-945C-9875E7FEA6B3';

DELETE FROM public.categories
WHERE id = '79CF620E-4E9D-4AEA-A604-7B17CFB884F2';

DELETE FROM public.categories
WHERE id = 'B8236508-4FE9-4BC1-A096-530454301FB1';

DELETE FROM public.categories
WHERE id = 'CB1402BD-FEB9-48F0-BD0A-E748820199BC';

DELETE FROM public.categories
WHERE id = 'CBBE4FB3-2413-43EA-BA13-F9DFF80EA629';

DELETE FROM public.categories
WHERE id = 'F7CE28EC-B581-48A4-9CC4-0D6E7B165D0F';

DELETE FROM public.categories
WHERE id = 'E36EE6FD-D94A-43B9-88D4-32AAB88953F7';

DELETE FROM public.categories
WHERE id = '2AA3F84C-FC93-4C70-9D8C-65FAF96F882A';

DELETE FROM public.categories
WHERE id = 'C68AA7CD-3F0C-46DD-8C27-C7C66FC9A265';

DELETE FROM public.categories
WHERE id = 'F38DEA6B-B69E-4375-98DC-0AF92B182703';

DELETE FROM public.categories
WHERE id = 'CF7FE73A-D471-4CF3-8127-33B4AF68D205';

DELETE FROM public.categories
WHERE id = 'C9AB61C2-0BF5-4149-B28F-29576BE52C5B';

DELETE FROM public.categories
WHERE id = '7968D6D3-822E-4CD6-9DE0-F8344C876CDB';

DELETE FROM public.categories
WHERE id = 'BECF64CD-6961-455A-9512-4D225A9FC9DE';

DELETE FROM public.categories
WHERE id = '65B08514-C124-49F1-91B4-977605A1D595';

DELETE FROM public.categories
WHERE id = '0FFBADBF-0088-4893-84E7-7238E447FB0B';

DELETE FROM public.categories
WHERE id = 'EF378074-BDFD-49C1-9F55-25ECCA4504F9';

DELETE FROM public.categories
WHERE id = 'F4E45501-A85A-44E5-BBEF-F2F210F38916';

DELETE FROM public.categories
WHERE id = 'A4760A79-C2AB-4DB0-9AFE-FE87AE01DDBC';

DELETE FROM public.categories
WHERE id = '706D3A74-3DD3-4D6B-999C-D3D2C7D5ACF0';

DELETE FROM public.categories
WHERE id = '3E610FA0-ABE4-43BD-8166-3B891CE68CC2';

DELETE FROM public.categories
WHERE id = '0025C394-D72E-47DB-9652-38DD6E03AB34';

DELETE FROM public.categories
WHERE id = 'C737434A-7103-47AB-827A-D6A40F908BDE';

DELETE FROM public.categories
WHERE id = 'F5215153-355A-47F6-AB71-C85F5EADA6BE';

DELETE FROM public.categories
WHERE id = 'F902B5A3-1B6F-48E2-8152-B0B61651F312';

DELETE FROM public.categories
WHERE id = '5ADF108E-4E18-44E9-828C-9E62A83161D8';

DELETE FROM public.categories
WHERE id = '18EDB861-94F1-43C8-89E4-3F8C5869F0CB';

DELETE FROM public.categories
WHERE id = 'FE2A3191-D328-449D-83EE-B6511B66942D';

DELETE FROM public.categories
WHERE id = 'FDDE4E99-3A86-4F86-AEF0-168AAF4765B6';

DELETE FROM public.categories
WHERE id = '539E91C4-7363-4238-A4ED-16FF92D9007B';

DELETE FROM public.categories
WHERE id = '1403A1AD-1521-41B6-BAC3-D2A70A3AE6D3';

DELETE FROM public.categories
WHERE id = '4B342825-89FF-4D80-AA5D-0A95D9B168E6';

DELETE FROM public.categories
WHERE id = '0E5FC518-3D5A-454C-877D-CE5CA8D6FB37';

DELETE FROM public.categories
WHERE id = 'C11FEB42-8CCE-4977-94D9-CEDEC58F7628';

DELETE FROM public.categories
WHERE id = '6D3FA75E-D2E8-4168-8D8F-D6C94835FAD4';

DELETE FROM public.categories
WHERE id = '309F9358-C304-41B4-BE19-32A55A7E3A9E';

DELETE FROM public.categories
WHERE id = '632035C4-19F8-49EB-8254-25FA4CD0817A';

DELETE FROM public.categories
WHERE id = '00069763-B5CC-43CA-B1F8-B969635625A4';

DELETE FROM public.categories
WHERE id = '64075087-8484-4C71-95E8-2872F5CC172E';

DELETE FROM public.categories
WHERE id = '2D3335A4-E974-4CC0-82BB-8657FEF13158';

DELETE FROM public.categories
WHERE id = '513CF4E4-18D1-4103-B2D1-DA06337E3914';

DELETE FROM public.categories
WHERE id = 'E5EA72B5-8ECE-46F6-8E3B-E8C00DF87BA7';
INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'111D3F38-B8EB-417F-8703-247FE3D0288C'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Salary'
	, 'Income'
	, 'landmark'
	, '#16A34A'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'3A49E119-1F8B-4CC1-B512-9C9CB6DE664C'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Transport'
	, 'Expense'
	, 'car'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'16B10D69-6591-4008-8C5B-00F35007C757'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Shopping'
	, 'Expense'
	, 'shopping-bag'
	, '#8B5CF6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'DECCF2F6-B8C0-44A5-B944-D6C7A03B0C09'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Food'
	, 'Expense'
	, 'utensils'
	, '#10B981'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'418DFAA7-A284-4C09-A8B7-9B54413D71DA'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Transfers'
	, 'Transfer'
	, 'arrow-left-right'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'DCE55A20-076B-45AE-BE66-80FBA32BE911'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Utilities'
	, 'Expense'
	, 'zap'
	, '#FACC15'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'62AC473C-5EA9-4B54-877E-3B2B37C1BDEA'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Freelance'
	, 'Income'
	, 'briefcase'
	, '#EA580C'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'5BD082EE-4CE7-4D22-9D4E-BCA1484C8771'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Others'
	, 'Expense'
	, 'more-horizontal'
	, '#94A3B8'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'ED6EFCE3-1E6A-4310-8636-A533479EEFB0'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Health'
	, 'Expense'
	, 'heart'
	, '#EF4444'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'C7D51825-D283-4702-B22A-1E5F0498CC9C'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Housing'
	, 'Expense'
	, 'home'
	, '#6C5CE7'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Entertainment'
	, 'Expense'
	, 'gamepad-2'
	, '#F97316'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'CD041983-5DCC-4D38-A410-F45EA356B72F'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Education'
	, 'Expense'
	, 'graduation-cap'
	, '#2563EB'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'94A0983D-D478-456E-9D91-9B732F82CFBC'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, NULL
	, 'Personal Care'
	, 'Expense'
	, 'user'
	, '#EC4899'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'7D7ABB1D-A7E0-440B-9DAA-9020EB54F1C2'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '3A49E119-1F8B-4CC1-B512-9C9CB6DE664C'
	, 'Fuel'
	, 'Expense'
	, 'car'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'ABDB5ABD-4297-4DA2-B9C1-6F1CC2E50F63'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '418DFAA7-A284-4C09-A8B7-9B54413D71DA'
	, 'Wallet Top-up'
	, 'Transfer'
	, 'arrow-left-right'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'6B8D45F6-CE79-4E3C-9521-346D6807E4AC'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '3A49E119-1F8B-4CC1-B512-9C9CB6DE664C'
	, 'Public Transport'
	, 'Expense'
	, 'car'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'3C89DA0E-6EFB-47E4-9C5E-B4D519FFCB57'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '418DFAA7-A284-4C09-A8B7-9B54413D71DA'
	, 'Bank Transfer'
	, 'Transfer'
	, 'arrow-left-right'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'7F81EE61-C409-4764-836C-8AD865D0E11A'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '3A49E119-1F8B-4CC1-B512-9C9CB6DE664C'
	, 'Vehicle Maintenance'
	, 'Expense'
	, 'car'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'0EE2E0C4-44D4-4D93-945C-9875E7FEA6B3'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '16B10D69-6591-4008-8C5B-00F35007C757'
	, 'Electronics'
	, 'Expense'
	, 'shopping-bag'
	, '#8B5CF6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'79CF620E-4E9D-4AEA-A604-7B17CFB884F2'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '16B10D69-6591-4008-8C5B-00F35007C757'
	, 'Gifts'
	, 'Expense'
	, 'shopping-bag'
	, '#8B5CF6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'B8236508-4FE9-4BC1-A096-530454301FB1'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '62AC473C-5EA9-4B54-877E-3B2B37C1BDEA'
	, 'Project Income'
	, 'Income'
	, 'briefcase'
	, '#EA580C'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'CB1402BD-FEB9-48F0-BD0A-E748820199BC'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5'
	, 'Movies & Shows'
	, 'Expense'
	, 'gamepad-2'
	, '#F97316'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'CBBE4FB3-2413-43EA-BA13-F9DFF80EA629'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DCE55A20-076B-45AE-BE66-80FBA32BE911'
	, 'Electricity'
	, 'Expense'
	, 'zap'
	, '#FACC15'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'F7CE28EC-B581-48A4-9CC4-0D6E7B165D0F'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '62AC473C-5EA9-4B54-877E-3B2B37C1BDEA'
	, 'Consulting'
	, 'Income'
	, 'briefcase'
	, '#EA580C'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'E36EE6FD-D94A-43B9-88D4-32AAB88953F7'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'C7D51825-D283-4702-B22A-1E5F0498CC9C'
	, 'Property Tax'
	, 'Expense'
	, 'home'
	, '#6C5CE7'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'2AA3F84C-FC93-4C70-9D8C-65FAF96F882A'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'CD041983-5DCC-4D38-A410-F45EA356B72F'
	, 'Books & Supplies'
	, 'Expense'
	, 'graduation-cap'
	, '#2563EB'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'C68AA7CD-3F0C-46DD-8C27-C7C66FC9A265'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '3A49E119-1F8B-4CC1-B512-9C9CB6DE664C'
	, 'Taxi & Ride Sharing'
	, 'Expense'
	, 'car'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'F38DEA6B-B69E-4375-98DC-0AF92B182703'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DECCF2F6-B8C0-44A5-B944-D6C7A03B0C09'
	, 'Groceries'
	, 'Expense'
	, 'utensils'
	, '#10B981'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'CF7FE73A-D471-4CF3-8127-33B4AF68D205'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '94A0983D-D478-456E-9D91-9B732F82CFBC'
	, 'Cosmetics'
	, 'Expense'
	, 'user'
	, '#EC4899'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'C9AB61C2-0BF5-4149-B28F-29576BE52C5B'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '94A0983D-D478-456E-9D91-9B732F82CFBC'
	, 'Salon & Grooming'
	, 'Expense'
	, 'user'
	, '#EC4899'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'7968D6D3-822E-4CD6-9DE0-F8344C876CDB'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DCE55A20-076B-45AE-BE66-80FBA32BE911'
	, 'Gas'
	, 'Expense'
	, 'zap'
	, '#FACC15'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'BECF64CD-6961-455A-9512-4D225A9FC9DE'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'CD041983-5DCC-4D38-A410-F45EA356B72F'
	, 'Online Courses'
	, 'Expense'
	, 'graduation-cap'
	, '#2563EB'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'65B08514-C124-49F1-91B4-977605A1D595'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'C7D51825-D283-4702-B22A-1E5F0498CC9C'
	, 'Furniture & Appliances'
	, 'Expense'
	, 'home'
	, '#6C5CE7'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'0FFBADBF-0088-4893-84E7-7238E447FB0B'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5'
	, 'Games'
	, 'Expense'
	, 'gamepad-2'
	, '#F97316'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'EF378074-BDFD-49C1-9F55-25ECCA4504F9'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'ED6EFCE3-1E6A-4310-8636-A533479EEFB0'
	, 'Doctor'
	, 'Expense'
	, 'heart'
	, '#EF4444'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'F4E45501-A85A-44E5-BBEF-F2F210F38916'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'C7D51825-D283-4702-B22A-1E5F0498CC9C'
	, 'Maintenance & Repairs'
	, 'Expense'
	, 'home'
	, '#6C5CE7'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'A4760A79-C2AB-4DB0-9AFE-FE87AE01DDBC'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '16B10D69-6591-4008-8C5B-00F35007C757'
	, 'Home Goods'
	, 'Expense'
	, 'shopping-bag'
	, '#8B5CF6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'706D3A74-3DD3-4D6B-999C-D3D2C7D5ACF0'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '111D3F38-B8EB-417F-8703-247FE3D0288C'
	, 'Bonus'
	, 'Income'
	, 'landmark'
	, '#16A34A'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'3E610FA0-ABE4-43BD-8166-3B891CE68CC2'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '5BD082EE-4CE7-4D22-9D4E-BCA1484C8771'
	, 'Miscellaneous'
	, 'Expense'
	, 'more-horizontal'
	, '#94A3B8'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'0025C394-D72E-47DB-9652-38DD6E03AB34'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'ED6EFCE3-1E6A-4310-8636-A533479EEFB0'
	, 'Lab Tests'
	, 'Expense'
	, 'heart'
	, '#EF4444'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'C737434A-7103-47AB-827A-D6A40F908BDE'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '3A49E119-1F8B-4CC1-B512-9C9CB6DE664C'
	, 'Parking & Tolls'
	, 'Expense'
	, 'car'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'F5215153-355A-47F6-AB71-C85F5EADA6BE'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DECCF2F6-B8C0-44A5-B944-D6C7A03B0C09'
	, 'Restaurants'
	, 'Expense'
	, 'utensils'
	, '#10B981'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'F902B5A3-1B6F-48E2-8152-B0B61651F312'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '16B10D69-6591-4008-8C5B-00F35007C757'
	, 'Clothing'
	, 'Expense'
	, 'shopping-bag'
	, '#8B5CF6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'5ADF108E-4E18-44E9-828C-9E62A83161D8'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5'
	, 'Events & Outings'
	, 'Expense'
	, 'gamepad-2'
	, '#F97316'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'18EDB861-94F1-43C8-89E4-3F8C5869F0CB'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DECCF2F6-B8C0-44A5-B944-D6C7A03B0C09'
	, 'Coffee & Snacks'
	, 'Expense'
	, 'utensils'
	, '#10B981'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'FE2A3191-D328-449D-83EE-B6511B66942D'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DCE55A20-076B-45AE-BE66-80FBA32BE911'
	, 'Water'
	, 'Expense'
	, 'zap'
	, '#FACC15'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'FDDE4E99-3A86-4F86-AEF0-168AAF4765B6'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '418DFAA7-A284-4C09-A8B7-9B54413D71DA'
	, 'Credit Card Payment'
	, 'Transfer'
	, 'arrow-left-right'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'539E91C4-7363-4238-A4ED-16FF92D9007B'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DCE55A20-076B-45AE-BE66-80FBA32BE911'
	, 'Internet'
	, 'Expense'
	, 'zap'
	, '#FACC15'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'1403A1AD-1521-41B6-BAC3-D2A70A3AE6D3'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'CD041983-5DCC-4D38-A410-F45EA356B72F'
	, 'Tuition & Fees'
	, 'Expense'
	, 'graduation-cap'
	, '#2563EB'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'4B342825-89FF-4D80-AA5D-0A95D9B168E6'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'C7D51825-D283-4702-B22A-1E5F0498CC9C'
	, 'Mortgage'
	, 'Expense'
	, 'home'
	, '#6C5CE7'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'0E5FC518-3D5A-454C-877D-CE5CA8D6FB37'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '418DFAA7-A284-4C09-A8B7-9B54413D71DA'
	, 'Savings Transfer'
	, 'Transfer'
	, 'arrow-left-right'
	, '#3B82F6'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'C11FEB42-8CCE-4977-94D9-CEDEC58F7628'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DCE55A20-076B-45AE-BE66-80FBA32BE911'
	, 'Mobile Recharge'
	, 'Expense'
	, 'zap'
	, '#FACC15'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'6D3FA75E-D2E8-4168-8D8F-D6C94835FAD4'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'C7D51825-D283-4702-B22A-1E5F0498CC9C'
	, 'Rent'
	, 'Expense'
	, 'home'
	, '#6C5CE7'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'309F9358-C304-41B4-BE19-32A55A7E3A9E'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'ED6EFCE3-1E6A-4310-8636-A533479EEFB0'
	, 'Health Insurance'
	, 'Expense'
	, 'heart'
	, '#EF4444'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'632035C4-19F8-49EB-8254-25FA4CD0817A'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '71E4B7E7-4357-4FD9-B89F-9EEBB2B5AFB5'
	, 'Subscriptions'
	, 'Expense'
	, 'gamepad-2'
	, '#F97316'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'00069763-B5CC-43CA-B1F8-B969635625A4'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '94A0983D-D478-456E-9D91-9B732F82CFBC'
	, 'Spa & Wellness'
	, 'Expense'
	, 'user'
	, '#EC4899'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'64075087-8484-4C71-95E8-2872F5CC172E'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '111D3F38-B8EB-417F-8703-247FE3D0288C'
	, 'Base Salary'
	, 'Income'
	, 'landmark'
	, '#16A34A'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'2D3335A4-E974-4CC0-82BB-8657FEF13158'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'ED6EFCE3-1E6A-4310-8636-A533479EEFB0'
	, 'Medicines'
	, 'Expense'
	, 'heart'
	, '#EF4444'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'513CF4E4-18D1-4103-B2D1-DA06337E3914'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, 'DECCF2F6-B8C0-44A5-B944-D6C7A03B0C09'
	, 'Food Delivery'
	, 'Expense'
	, 'utensils'
	, '#10B981'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);

INSERT INTO public.categories
	(
	id
	, user_id
	, parent_category_id
	, name
	, category_type
	, icon
	, color
	, is_system
	, is_active
	, created_at
	, updated_at
	)
VALUES
	(
	'E5EA72B5-8ECE-46F6-8E3B-E8C00DF87BA7'
	, '57789387-8C67-4485-9BC7-9A0C726ECB75'
	, '111D3F38-B8EB-417F-8703-247FE3D0288C'
	, 'Allowances'
	, 'Income'
	, 'landmark'
	, '#16A34A'
	, '1'
	, '1'
	, '2026-10-09 18:34:39.010685'
	, '2026-10-09 18:34:39.010685'
	);


