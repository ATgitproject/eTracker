import './DynamicForm.scss';

/**
 * DynamicForm
 * ------------------------------------------------------------------
 * Renders <input>/<select>/<textarea> fields purely from a `fields`
 * config array (see transactionFormConfig.json / signupFormConfig.json).
 * Both the Add Transaction modal and the Signup form reuse this, so
 * "make some fields mandatory accordingly" is a one-line JSON change
 * (`"required": true`) rather than a JSX edit.
 * ------------------------------------------------------------------
 */
export default function DynamicForm({ fields, values, errors, onChange }) {
  return (
    <div className="dynamic-form">
      {fields.map((field) => (
        <div className="dynamic-form__field" key={field.name}>
          <label htmlFor={field.name}>
            {field.label}
            {field.required && <span className="dynamic-form__required">*</span>}
          </label>

          {field.type === 'select' ? (
            <select
              id={field.name}
              value={values[field.name] ?? ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            >
              <option value="" disabled>
                Select {field.label.toLowerCase()}
              </option>
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              id={field.name}
              rows={3}
              placeholder={field.placeholder}
              value={values[field.name] ?? ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              min={field.min}
              step={field.step}
              value={values[field.name] ?? ''}
              onChange={(e) => onChange(field.name, e.target.value)}
            />
          )}

          {errors?.[field.name] && <span className="dynamic-form__error">{errors[field.name]}</span>}
        </div>
      ))}
    </div>
  );
}

/** Validates `values` against `fields`, returning an { [name]: message } error map. */
export function validateFields(fields, values) {
  const errors = {};
  fields.forEach((field) => {
    const value = values[field.name];
    if (field.required && (value === undefined || value === null || value === '')) {
      errors[field.name] = `${field.label} is required`;
    } else if (field.type === 'number' && value !== '' && value !== undefined) {
      if (field.min !== undefined && Number(value) < field.min) {
        errors[field.name] = `${field.label} must be at least ${field.min}`;
      }
    } else if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      errors[field.name] = 'Enter a valid email address';
    }
  });
  return errors;
}
