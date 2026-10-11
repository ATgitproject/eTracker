
DELETE FROM public.users
WHERE id = 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD';


INSERT INTO public.users
	(
	id
	, name
	, email
	, mobile_number
	, password
	, is_verified
	, createdon
	, modiefiedon
	)
VALUES
	(
	'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 'Test User'
	, 'Test@gmail.com'
	, '9742893292'
	, '$argon2id$v=19$m=65536,p=4,t=3$WQqitUS47eKebFXyFFZW2Q$5RS/C6fVP2pEc4xtzkQ0lrfVj0P3S0uKDZXA9YsZYis'
	, '0'
	, '2026-09-25 22:00:21.258431'
	, '2026-09-25 22:00:21.258431'
	);





DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000001';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000002';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000003';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000004';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000005';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000006';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000007';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000008';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000009';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000010';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000011';

DELETE FROM public.transactions
WHERE id = 'D1000000-0000-4000-8000-000000000012';

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000001', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'income', 65000, 'Monthly Salary', 'A1000000-0000-4000-8000-000000000008', 'bank_transfer', 'Acme Technologies', '2026-10-07 09:00:00', 'Monthly salary', '1', NULL, 'SAL-001', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'briefcase-business', '#6842FF');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000002', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'income', 8500, 'Freelance Payment', 'A1000000-0000-4000-8000-000000000009', 'bank_transfer', 'Design Client', '2026-10-04 14:30:00', 'Website project payment', '0', NULL, 'INC-002', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'briefcase-business', '#16A765');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000003', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 450, 'Lunch', 'A1000000-0000-4000-8000-000000000001', 'upi', 'Restaurant', '2026-10-09 13:15:00', 'Lunch with colleagues', '0', NULL, 'EXP-001', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'utensils', '#FF6B35');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000004', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 850, 'Grocery Shopping', 'A1000000-0000-4000-8000-000000000001', 'upi', 'Supermarket', '2026-10-08 18:00:00', 'Weekly groceries', '0', NULL, 'EXP-002', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'shopping-cart', '#F44336');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000005', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 320, 'Cab Ride', 'A1000000-0000-4000-8000-000000000002', 'upi', 'Uber', '2026-10-08 08:30:00', 'Office commute', '0', NULL, 'EXP-003', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'car-front', '#2196F3');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000006', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 649, 'Netflix Subscription', 'A1000000-0000-4000-8000-000000000003', 'credit_card', 'Netflix', '2026-10-07 10:00:00', 'Monthly subscription', '1', NULL, 'EXP-004', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'gamepad-2', '#FFC107');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000007', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 2800, 'Electricity Bill', 'A1000000-0000-4000-8000-000000000004', 'upi', 'Electricity Provider', '2026-10-06 11:20:00', 'Monthly electricity bill', '0', NULL, 'EXP-005', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'zap', '#D936F5');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000008', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 2499, 'Online Shopping', 'A1000000-0000-4000-8000-000000000005', 'credit_card', 'Amazon', '2026-10-05 16:00:00', 'Household accessories', '0', NULL, 'EXP-006', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'shopping-cart', '#607D8B');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000009', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 12000, 'Monthly Rent', 'A1000000-0000-4000-8000-000000000006', 'bank_transfer', 'Property Owner', '2026-10-01 09:00:00', 'Monthly rent', '0', NULL, 'EXP-007', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'house', '#111827');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000010', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 1200, 'Movie Night', 'A1000000-0000-4000-8000-000000000003', 'credit_card', 'Cinema', '2026-10-03 19:30:00', 'Weekend entertainment', '0', NULL, 'EXP-008', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'gamepad-2', '#EC4899');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000011', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'expense', 550, 'Pharmacy', 'A1000000-0000-4000-8000-000000000007', 'upi', 'Local Pharmacy', '2026-10-02 12:00:00', 'Health supplies', '0', NULL, 'EXP-009', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'heart-pulse', '#16A765');

INSERT INTO public.transactions (id, user_id, transaction_type, amount, description, category_id, payment_method, merchant, transaction_date, notes, is_recurring, recurring_transaction_id, reference_id, created_at, updated_at, icon, color)
VALUES ('D1000000-0000-4000-8000-000000000012', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'income', 2500, 'Investment Dividend', 'A1000000-0000-4000-8000-000000000010', 'bank_transfer', 'Investment Account', '2026-09-30 10:00:00', 'Dividend received', '0', NULL, 'INC-003', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535', 'wallet', '#6842FF');

DELETE FROM public.budgets
WHERE id = 'B1000000-0000-4000-8000-000000000001';

DELETE FROM public.budgets
WHERE id = 'B1000000-0000-4000-8000-000000000002';

DELETE FROM public.budgets
WHERE id = 'B1000000-0000-4000-8000-000000000003';

DELETE FROM public.budgets
WHERE id = 'B1000000-0000-4000-8000-000000000004';

DELETE FROM public.budgets
WHERE id = 'B1000000-0000-4000-8000-000000000005';

DELETE FROM public.budgets
WHERE id = 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B';

INSERT INTO public.budgets (id, user_id, name, amount, period_type, start_date, end_date, is_active, created_at, updated_at)
VALUES ('B1000000-0000-4000-8000-000000000001', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Food & Groceries', 10000, 'monthly', '2026-10-01', '2026-10-31', '1', '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221');

INSERT INTO public.budgets (id, user_id, name, amount, period_type, start_date, end_date, is_active, created_at, updated_at)
VALUES ('B1000000-0000-4000-8000-000000000002', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Transportation', 8000, 'monthly', '2026-10-01', '2026-10-31', '1', '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221');

INSERT INTO public.budgets (id, user_id, name, amount, period_type, start_date, end_date, is_active, created_at, updated_at)
VALUES ('B1000000-0000-4000-8000-000000000003', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Entertainment', 9500, 'monthly', '2026-10-01', '2026-10-31', '1', '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221');

INSERT INTO public.budgets (id, user_id, name, amount, period_type, start_date, end_date, is_active, created_at, updated_at)
VALUES ('B1000000-0000-4000-8000-000000000004', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Shopping', 7000, 'monthly', '2026-10-01', '2026-10-31', '1', '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221');

INSERT INTO public.budgets (id, user_id, name, amount, period_type, start_date, end_date, is_active, created_at, updated_at)
VALUES ('B1000000-0000-4000-8000-000000000005', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Annual Savings Plan', 120000, 'yearly', '2026-01-01', '2026-12-31', '1', '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221');

INSERT INTO public.budgets (id, user_id, name, amount, period_type, start_date, end_date, is_active, created_at, updated_at)
VALUES ('F1AAA0D0-B9B2-46A1-B7CF-619230563D2B', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Monthly Budget', 7200, 'monthly', '2026-10-01', '2026-10-31', '1', '2026-10-09 15:11:38.33987', '2026-10-09 15:11:38.33987');



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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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
	, 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B'
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




DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000001';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000002';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000003';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000004';

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at)
VALUES ('C1000000-0000-4000-8000-000000000001', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Netflix Premium', 'Netflix', 'A1000000-0000-4000-8000-000000000003', 649, 'monthly', '2026-10-14', 'credit_card', '1', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535');

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at)
VALUES ('C1000000-0000-4000-8000-000000000002', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Spotify Premium', 'Spotify', 'A1000000-0000-4000-8000-000000000003', 119, 'monthly', '2026-10-17', 'upi', '1', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535');

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at)
VALUES ('C1000000-0000-4000-8000-000000000003', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Home Internet', 'Internet Provider', 'A1000000-0000-4000-8000-000000000004', 999, 'monthly', '2026-10-21', 'upi', '1', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535');

INSERT INTO public.subscriptions (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at)
VALUES ('C1000000-0000-4000-8000-000000000004', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Cloud Storage', 'Cloud Provider', 'A1000000-0000-4000-8000-000000000005', 1300, 'yearly', '2026-11-08', 'credit_card', '1', '2026-10-09 11:30:24.4535', '2026-10-09 11:30:24.4535');



DELETE FROM public.budget_categories
WHERE id = 'A59C7A6F-8E79-4D8B-A441-2910E758AD46';

DELETE FROM public.budget_categories
WHERE id = '432DC9CB-94D8-4DD9-A10F-3089C64BBBE4';

DELETE FROM public.budget_categories
WHERE id = 'B61A5AFB-45D9-4C7F-9C19-6AB0A3D3A78D';

DELETE FROM public.budget_categories
WHERE id = '08397D05-03DE-433E-8EA6-DE1FDA966FEA';

DELETE FROM public.budget_categories
WHERE id = 'B775057F-69F0-4934-9F51-2CF6D2833721';

DELETE FROM public.budget_categories
WHERE id = '39D984B1-5A57-4470-BE52-E8F12279ACC2';

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('A59C7A6F-8E79-4D8B-A441-2910E758AD46', 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B', 'A1000000-0000-4000-8000-000000000001', 6000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('432DC9CB-94D8-4DD9-A10F-3089C64BBBE4', 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B', 'A1000000-0000-4000-8000-000000000002', 4000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('B61A5AFB-45D9-4C7F-9C19-6AB0A3D3A78D', 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B', 'A1000000-0000-4000-8000-000000000003', 4000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('08397D05-03DE-433E-8EA6-DE1FDA966FEA', 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B', 'A1000000-0000-4000-8000-000000000004', 3000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('B775057F-69F0-4934-9F51-2CF6D2833721', 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B', 'A1000000-0000-4000-8000-000000000005', 3000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('39D984B1-5A57-4470-BE52-E8F12279ACC2', 'F1AAA0D0-B9B2-46A1-B7CF-619230563D2B', 'A1000000-0000-4000-8000-000000000006', 20000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

