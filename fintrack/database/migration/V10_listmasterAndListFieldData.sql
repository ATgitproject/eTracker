



DELETE FROM public.list_master
WHERE id = '50D97669-EB51-44D9-879F-A32597114998';

DELETE FROM public.list_master
WHERE id = '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9';

DELETE FROM public.list_master
WHERE id = '16AA1F53-FA2E-435C-8215-C654C5AEC3E6';


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
	, 'categories'
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
	
	






DELETE FROM public.list_field_map
WHERE id = 'A181F613-C685-4945-9E7C-A3720A1C4823';

DELETE FROM public.list_field_map
WHERE id = '93C2AD26-2098-4865-BEBE-2D2F973FD843';

DELETE FROM public.list_field_map
WHERE id = '9A9FF57B-1662-4078-BADE-7D7BD29339F7';

DELETE FROM public.list_field_map
WHERE id = 'E3EFB721-A275-4E0E-BE8B-76FCA69A364E';

DELETE FROM public.list_field_map
WHERE id = 'CCA79626-8933-4610-991B-6C3A5737B066';

DELETE FROM public.list_field_map
WHERE id = 'CCA79626-8933-4610-991B-6C3A5737B066';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_field_map
WHERE id = '2444CF47-D5B5-412B-9735-4A55DCAEA81C';

DELETE FROM public.list_field_map
WHERE id = 'FB29E916-964C-4273-A2BA-978D90B15E0A';

DELETE FROM public.list_field_map
WHERE id = '44C7881F-AAC1-4873-9088-E4702B41C7C9';


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
	, 'CASH'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'CASH'
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
	'9A9FF57B-1662-4078-BADE-7D7BD29339F7'
	, 'CREDIT CARD'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'CREDIT CARD'
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
	'E3EFB721-A275-4E0E-BE8B-76FCA69A364E'
	, 'DEBIT CARD'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'DEBIT CARD'
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
	'CCA79626-8933-4610-991B-6C3A5737B066'
	, 'NET BANKING'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'NET BANKING'
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
	'CCA79626-8933-4610-991B-6C3A5737B066'
	, 'NET BANKING'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'NET BANKING'
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
	, 'BANK TRANSFER'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'BANK TRANSFER'
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
	, 'BANK TRANSFER'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'BANK TRANSFER'
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
	'FB29E916-964C-4273-A2BA-978D90B15E0A'
	, 'WALLET'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'WALLET'
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
	, 'CHEQUE'
	, '3821CEB2-A242-419A-AA0A-D3FEDF7B71C9'
	, 'CHEQUE'
	, '0'
	, 0
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '2026-10-09 11:09:53.445909'
	, NULL
	, '0'
	);







DELETE FROM public.list_field_map
WHERE id = '51E729FD-1FC1-4FB1-9C18-3C7903AEEF77';

DELETE FROM public.list_field_map
WHERE id = '168056E7-D9BB-4C53-B7E8-347A368B271E';

DELETE FROM public.list_field_map
WHERE id = '6A555F5C-5079-485F-98ED-E0C7986635AB';

DELETE FROM public.list_field_map
WHERE id = '64F5DADE-6CF3-44FA-8FAE-CB195CF49F87';

DELETE FROM public.list_field_map
WHERE id = 'E8043CE2-E393-4DBE-99AC-5F2D30C41643';

DELETE FROM public.list_field_map
WHERE id = '607FDDB0-D125-4E6E-9EC7-08CE3B853DCB';

DELETE FROM public.list_field_map
WHERE id = '37A2CDCF-3405-415B-97FB-79BBBEA24576';

DELETE FROM public.list_field_map
WHERE id = 'FF91475E-1DC6-41A6-90F7-6BD1E1EC33C0';

DELETE FROM public.list_field_map
WHERE id = 'EC02B3A0-3095-4C88-91B5-1FD4DBF9E429';

DELETE FROM public.list_field_map
WHERE id = '34808C12-6763-4449-8DE8-C318A04663A4';

DELETE FROM public.list_field_map
WHERE id = '737DF17D-E023-470C-A21E-CC218C3AE2BA';

DELETE FROM public.list_field_map
WHERE id = 'FDF60987-FAC7-437D-A4E2-C10E13083C9E';

DELETE FROM public.list_field_map
WHERE id = '4965405E-8434-42B1-9106-9DAAE11B01FA';

DELETE FROM public.list_field_map
WHERE id = 'CA087C42-472F-446C-A1B8-F55358C2C05E';

DELETE FROM public.list_field_map
WHERE id = '14229353-BB6F-4BD7-AF53-0A03957E0D87';

DELETE FROM public.list_field_map
WHERE id = '75503CE0-21A7-4AC5-AA85-A176A2E01AAA';

DELETE FROM public.list_field_map
WHERE id = 'FDE15746-4ED8-4FB9-B679-28C2295A0DE7';

DELETE FROM public.list_field_map
WHERE id = '6AF7E2EE-C64F-42AD-BBCC-F2D0F5A21B33';

DELETE FROM public.list_field_map
WHERE id = '607FDDB0-D125-4E6E-9EC7-08CE3B853DCB';

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
	'51E729FD-1FC1-4FB1-9C18-3C7903AEEF77'
	, 'Other Expenses'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Other Expenses'
	, '0'
	, 18
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
	'168056E7-D9BB-4C53-B7E8-347A368B271E'
	, 'Donations'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Donations'
	, '0'
	, 17
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
	'6A555F5C-5079-485F-98ED-E0C7986635AB'
	, 'Taxes'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Taxes'
	, '0'
	, 16
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
	'64F5DADE-6CF3-44FA-8FAE-CB195CF49F87'
	, 'Fees & Charges'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Fees & Charges'
	, '0'
	, 15
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
	'E8043CE2-E393-4DBE-99AC-5F2D30C41643'
	, 'Fitness'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Fitness'
	, '0'
	, 14
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
	'607FDDB0-D125-4E6E-9EC7-08CE3B853DCB'
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
	'37A2CDCF-3405-415B-97FB-79BBBEA24576'
	, 'Pets'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Pets'
	, '0'
	, 13
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
	'FF91475E-1DC6-41A6-90F7-6BD1E1EC33C0'
	, 'Family'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Family'
	, '0'
	, 12
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
	'EC02B3A0-3095-4C88-91B5-1FD4DBF9E429'
	, 'Insurance'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Insurance'
	, '0'
	, 11
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
	'34808C12-6763-4449-8DE8-C318A04663A4'
	, 'Personal Care'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Personal Care'
	, '0'
	, 10
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
	'737DF17D-E023-470C-A21E-CC218C3AE2BA'
	, 'Travel'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Travel'
	, '0'
	, 9
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
	'FDF60987-FAC7-437D-A4E2-C10E13083C9E'
	, 'Education'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Education'
	, '0'
	, 8
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
	'4965405E-8434-42B1-9106-9DAAE11B01FA'
	, 'Healthcare'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Healthcare'
	, '0'
	, 7
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
	'CA087C42-472F-446C-A1B8-F55358C2C05E'
	, 'Housing'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Housing'
	, '0'
	, 6
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
	'14229353-BB6F-4BD7-AF53-0A03957E0D87'
	, 'Bills & Utilities'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Bills & Utilities'
	, '0'
	, 5
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
	, 'Shopping'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Shopping'
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
	'FDE15746-4ED8-4FB9-B679-28C2295A0DE7'
	, 'Transportation'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Transportation'
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
	'6AF7E2EE-C64F-42AD-BBCC-F2D0F5A21B33'
	, 'Food & Dining'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Food & Dining'
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
	'607FDDB0-D125-4E6E-9EC7-08CE3B853DCB'
	, 'Entertainment'
	, '16AA1F53-FA2E-435C-8215-C654C5AEC3E6'
	, 'Entertainment'
	, '0'
	, 4
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '2026-10-09 12:35:08.982764'
	, NULL
	, '0'
	);
