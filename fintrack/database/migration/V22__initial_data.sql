

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


INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000001'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 65000
	, 'Income'
	, 'Monthly Salary'
	, 'A1000000-0000-4000-8000-000000000008'
	, 'Bank Transfer'
	, 'Acme Technologies'
	, 'briefcase-business'
	, '#6842FF'
	, '2026-10-07 09:00:00'
	, 'Monthly salary'
	, '1'
	, NULL
	, 'SAL-001'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000002'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 8500
	, 'Income'
	, 'Freelance Payment'
	, 'A1000000-0000-4000-8000-000000000009'
	, 'Bank Transfer'
	, 'Design Client'
	, 'briefcase-business'
	, '#16A765'
	, '2026-10-04 14:30:00'
	, 'Website project payment'
	, '0'
	, NULL
	, 'INC-002'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000003'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 450
	, 'Expense'
	, 'Lunch'
	, 'A1000000-0000-4000-8000-000000000001'
	, 'UPI'
	, 'Restaurant'
	, 'utensils'
	, '#FF6B35'
	, '2026-10-09 13:15:00'
	, 'Lunch with colleagues'
	, '0'
	, NULL
	, 'EXP-001'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000004'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 850
	, 'Expense'
	, 'Grocery Shopping'
	, 'A1000000-0000-4000-8000-000000000001'
	, 'UPI'
	, 'Supermarket'
	, 'shopping-cart'
	, '#F44336'
	, '2026-10-08 18:00:00'
	, 'Weekly groceries'
	, '0'
	, NULL
	, 'EXP-002'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000005'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 320
	, 'Expense'
	, 'Cab Ride'
	, 'A1000000-0000-4000-8000-000000000002'
	, 'UPI'
	, 'Uber'
	, 'car-front'
	, '#2196F3'
	, '2026-10-08 08:30:00'
	, 'Office commute'
	, '0'
	, NULL
	, 'EXP-003'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000006'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 649
	, 'Expense'
	, 'Netflix Subscription'
	, 'A1000000-0000-4000-8000-000000000003'
	, 'Credit Card'
	, 'Netflix'
	, 'gamepad-2'
	, '#FFC107'
	, '2026-10-07 10:00:00'
	, 'Monthly subscription'
	, '1'
	, NULL
	, 'EXP-004'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000007'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 2800
	, 'Expense'
	, 'Electricity Bill'
	, 'A1000000-0000-4000-8000-000000000004'
	, 'UPI'
	, 'Electricity Provider'
	, 'zap'
	, '#D936F5'
	, '2026-10-06 11:20:00'
	, 'Monthly electricity bill'
	, '0'
	, NULL
	, 'EXP-005'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000008'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 2499
	, 'Expense'
	, 'Online Shopping'
	, 'A1000000-0000-4000-8000-000000000005'
	, 'Credit Card'
	, 'Amazon'
	, 'shopping-cart'
	, '#607D8B'
	, '2026-10-05 16:00:00'
	, 'Household accessories'
	, '0'
	, NULL
	, 'EXP-006'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000009'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 12000
	, 'Expense'
	, 'Monthly Rent'
	, 'A1000000-0000-4000-8000-000000000006'
	, 'Bank Transfer'
	, 'Property Owner'
	, 'house'
	, '#111827'
	, '2026-10-01 09:00:00'
	, 'Monthly rent'
	, '0'
	, NULL
	, 'EXP-007'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000010'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 1200
	, 'Expense'
	, 'Movie Night'
	, 'A1000000-0000-4000-8000-000000000003'
	, 'Credit Card'
	, 'Cinema'
	, 'gamepad-2'
	, '#EC4899'
	, '2026-10-03 19:30:00'
	, 'Weekend entertainment'
	, '0'
	, NULL
	, 'EXP-008'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000011'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 550
	, 'Expense'
	, 'Pharmacy'
	, 'A1000000-0000-4000-8000-000000000007'
	, 'UPI'
	, 'Local Pharmacy'
	, 'heart-pulse'
	, '#16A765'
	, '2026-10-02 12:00:00'
	, 'Health supplies'
	, '0'
	, NULL
	, 'EXP-009'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);

INSERT INTO public.transactions
	(
	id
	, user_id
	, amount
	, transaction_type
	, description
	, category_id
	, payment_method
	, merchant
	, icon
	, color
	, transaction_date
	, notes
	, is_recurring
	, recurring_transaction_id
	, reference_id
	, created_at
	, updated_at
	)
VALUES
	(
	'D1000000-0000-4000-8000-000000000012'
	, 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD'
	, 2500
	, 'Income'
	, 'Investment Dividend'
	, 'A1000000-0000-4000-8000-000000000010'
	, 'Bank Transfer'
	, 'Investment Account'
	, 'wallet'
	, '#6842FF'
	, '2026-09-30 10:00:00'
	, 'Dividend received'
	, '0'
	, NULL
	, 'INC-003'
	, '2026-10-09 11:30:24.4535'
	, '2026-10-09 11:30:24.4535'
	);



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


INSERT INTO public.budgets
    (id, user_id, name, amount, period_type, start_date, end_date, is_active, created_at, updated_at, category_id)
VALUES
    ('B1000000-0000-4000-8000-000000000001', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Food & Groceries',    10000,  'Monthly',   '2026-10-01', '2026-10-31', true, '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221', 'A1000000-0000-4000-8000-000000000001'),
    ('B1000000-0000-4000-8000-000000000002', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Transportation',       8000,  'Weekly',    '2026-10-12', '2026-10-18', true, '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221', 'A1000000-0000-4000-8000-000000000002'),
    ('B1000000-0000-4000-8000-000000000003', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Entertainment',        9500,  'Quarterly', '2026-10-01', '2026-12-31', true, '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221','A1000000-0000-4000-8000-000000000003'),
    ('B1000000-0000-4000-8000-000000000004', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Shopping',             7000,  'Custom',    '2026-10-25', '2026-11-10', true, '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221', 'A1000000-0000-4000-8000-000000000008'),
    ('B1000000-0000-4000-8000-000000000005', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Annual Savings Plan', 120000, 'Yearly',    '2026-01-01', '2026-12-31', true, '2026-10-09 11:33:55.735221', '2026-10-09 11:33:55.735221', 'A1000000-0000-4000-8000-000000000013');
	
	
	


DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000001';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000002';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000003';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000004';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000005';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000006';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000007';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000008';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000009';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000010';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000011';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000012';

DELETE FROM public.categories
WHERE id = 'A1000000-0000-4000-8000-000000000013';


INSERT INTO public.categories
    (id, user_id, name, category_type, icon, color,
     is_system, is_active, created_at, updated_at,
     parent_category_id, category_level)
VALUES
    ('A1000000-0000-4000-8000-000000000001', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Food',          'Expense',  'utensils',           '#10B981', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000002', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Transport',     'Expense',  'car-front',          '#3B82F6', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000003', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Entertainment', 'Expense',  'gamepad-2',          '#F97316', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000004', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Utilities',     'Expense',  'zap',                '#F59E0B', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000005', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Housing',       'Expense',  'house',              '#3B82F6', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000006', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Healthcare',    'Expense',  'heart-pulse',        '#EF4444', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000007', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Travel',        'Expense',  'plane',              '#8B5CF6', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000008', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Shopping',      'Expense',  'shopping-cart',      '#8B5CF6', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000009', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Education',     'Expense',  'graduation-cap',     '#2563EB', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000010', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Personal Care', 'Expense',  'user',               '#EC4899', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000011', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Gifts',         'Expense',  'gift',               '#EC4899', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000012', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Wallet',        'Expense',  'wallet',             '#14B8A6', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000013', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Others',        'Expense',  'more-horizontal',    '#94A3B8', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000014', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Salary',        'Income',   'briefcase-business', '#16A34A', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000015', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Freelance',     'Income',   'laptop',          '#EA580C', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category'),
    ('A1000000-0000-4000-8000-000000000016', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Transfers',     'Transfer', 'arrow-left-right',   '#3B82F6', true, true, '2026-10-09 18:34:39.010685', '2026-10-09 18:34:39.010685', NULL, 'Main Category');



DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000001';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000002';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000003';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000004';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000005';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000006';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000007';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000008';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000009';

DELETE FROM public.subscriptions
WHERE id = 'C1000000-0000-4000-8000-000000000010';

INSERT INTO public.subscriptions
    (id, user_id, name, merchant, category_id, amount, billing_cycle, next_billing_date, payment_method, is_active, created_at, updated_at, icon)
VALUES
    ('C1000000-0000-4000-8000-000000000001', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Netflix Premium',          'Netflix',           'A1000000-0000-4000-8000-000000000003',  649, 'Monthly',   '2026-10-14', 'Credit Card', true, '2026-10-09 11:30:24.4535',  '2026-10-09 11:30:24.4535',  'clapperboard'),
    ('C1000000-0000-4000-8000-000000000002', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Spotify Premium',         'Spotify',           'A1000000-0000-4000-8000-000000000003',  119, 'Weekly',    '2026-10-17', 'UPI',         true, '2026-10-09 11:30:24.4535',  '2026-10-09 11:30:24.4535',  'music'),
    ('C1000000-0000-4000-8000-000000000003', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Home Internet',           'Internet Provider', 'A1000000-0000-4000-8000-000000000004',  999, 'Quarterly', '2026-10-21', 'UPI',         true, '2026-10-09 11:30:24.4535',  '2026-10-09 11:30:24.4535',  'wifi'),
    ('C1000000-0000-4000-8000-000000000004', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Cloud Storage',           'Cloud Provider',    'A1000000-0000-4000-8000-000000000005', 1300, 'Yearly',    '2026-11-08', 'Credit Card', true, '2026-10-09 11:30:24.4535',  '2026-10-09 11:30:24.4535',  'cloud'),
    ('C1000000-0000-4000-8000-000000000005', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Online Course Instalment', 'Learning Platform',  'A1000000-0000-4000-8000-000000000009', 2500, 'Custom',    '2026-11-05', 'UPI',         true, '2026-10-09 11:30:24.4535',  '2026-10-09 11:30:24.4535',  'graduation-cap'),
    ('C1000000-0000-4000-8000-000000000006', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Crunchyroll',              'Crunchyroll',       'A1000000-0000-4000-8000-000000000003',   99, 'Monthly',   '2026-11-12', 'UPI',         true, '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'tv'),
    ('C1000000-0000-4000-8000-000000000007', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'YouTube Premium',         'YouTube',           'A1000000-0000-4000-8000-000000000003',  149, 'Weekly',    '2026-10-20', 'UPI',         true, '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'play'),
    ('C1000000-0000-4000-8000-000000000008', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Prime Video',             'Amazon Prime',      'A1000000-0000-4000-8000-000000000003', 1499, 'Yearly',    '2027-01-10', 'Credit Card', true, '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'film'),
    ('C1000000-0000-4000-8000-000000000009', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Google One',              'Google',            'A1000000-0000-4000-8000-000000000003',  130, 'Quarterly', '2027-01-20', 'UPI',         true, '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'cloud-upload'),
    ('C1000000-0000-4000-8000-000000000010', 'FDD9DFE1-5A27-4596-B84D-9FFAD858AFBD', 'Coursera Plus',           'Coursera',          'A1000000-0000-4000-8000-000000000009', 3999, 'Custom',    '2026-12-05', 'Credit Card', true, '2026-10-12 23:41:00.744574', '2026-10-12 23:41:00.744574', 'book-open');
	
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
VALUES ('A59C7A6F-8E79-4D8B-A441-2910E758AD46', 'B1000000-0000-4000-8000-000000000001', 'A1000000-0000-4000-8000-000000000001', 6000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('432DC9CB-94D8-4DD9-A10F-3089C64BBBE4', 'B1000000-0000-4000-8000-000000000002', 'A1000000-0000-4000-8000-000000000002', 4000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('B61A5AFB-45D9-4C7F-9C19-6AB0A3D3A78D', 'B1000000-0000-4000-8000-000000000003', 'A1000000-0000-4000-8000-000000000003', 4000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('08397D05-03DE-433E-8EA6-DE1FDA966FEA', 'B1000000-0000-4000-8000-000000000004', 'A1000000-0000-4000-8000-000000000004', 3000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

INSERT INTO public.budget_categories (id, budget_id, category_id, amount, created_at, updated_at)
VALUES ('B775057F-69F0-4934-9F51-2CF6D2833721', 'B1000000-0000-4000-8000-000000000005', 'A1000000-0000-4000-8000-000000000005', 3000, '2026-10-09 15:13:33.258913', '2026-10-09 15:13:33.258913');

