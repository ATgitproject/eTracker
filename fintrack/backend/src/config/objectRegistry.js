const objectRegistry = {
  navigation: {
    table: "navigation",

    allowedFields: [
      "id",
      "key",
      "name",
      "path",
      "icon",
      "display_order",
      "is_active",
      "created_at",
      "updated_at",
    ],

    writableFields: [
      "key",
      "name",
      "path",
      "icon",
      "display_order",
      "is_active",
    ],

    createdField: "created_at",
    modifiedField: "updated_at",
  },

  transactions: {
    table: "transactions",

    allowedFields: [
      "id",
      "user_id",
      "transaction_type",
      "amount",
      "description",
      "category_id",
      "payment_method",
      "merchant",
      "transaction_date",
      "notes",
      "is_recurring",
      "recurring_transaction_id",
      "reference_id",
      "created_at",
      "updated_at",
    ],

    writableFields: [
      "user_id",
      "transaction_type",
      "amount",
      "description",
      "category_id",
      "payment_method",
      "merchant",
      "transaction_date",
      "notes",
      "is_recurring",
      "recurring_transaction_id",
      "reference_id",
    ],

    createdField: "created_at",
    modifiedField: "updated_at",
  },

  financial_profiles: {
    table: "financial_profiles",

    allowedFields: [
      "id",
      "user_id",
      "monthly_income",
      "spending_limit",
      "created_at",
      "updated_at",
    ],

    writableFields: ["user_id", "monthly_income", "spending_limit"],

    createdField: "created_at",
    modifiedField: "updated_at",
  },
};

module.exports = objectRegistry;
