"use client";

import { useCallback, useState } from "react";

const useForm = ({ initialValues = {}, fields = [] } = {}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const updateFormData = useCallback((field, value) => {
    setFormData((previousData) => ({
      ...previousData,
      [field]: value,
    }));

    setErrors((previousErrors) => {
      if (!previousErrors[field]) {
        return previousErrors;
      }

      const nextErrors = {
        ...previousErrors,
      };

      delete nextErrors[field];

      return nextErrors;
    });
  }, []);

  const handleChange = useCallback(
    (field, value) => {
      updateFormData(field, value);
    },
    [updateFormData],
  );

  const validate = useCallback(() => {
    const nextErrors = {};

    fields.forEach((field) => {
      if (
        field.required &&
        (formData[field.field] === undefined ||
          formData[field.field] === null ||
          formData[field.field] === "")
      ) {
        nextErrors[field.field] =
          field.requiredMessage || `${field.label || field.field} is required.`;
      }

      if (field.validation === "email" && formData[field.field]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData[field.field])) {
          nextErrors[field.field] =
            field.validationMessage || "Enter a valid email address.";
        }
      }
    });

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }, [fields, formData]);

  const handleSubmit = useCallback(
    async (callback) => {
      const isValid = validate();

      if (!isValid) {
        return;
      }

      if (typeof callback === "function") {
        await callback(formData);
      }
    },
    [formData, validate],
  );

  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
  }, [initialValues]);

  const getFormValues = useCallback(() => {
    return formData;
  }, [formData]);

  return {
    formData,
    setFormData,
    errors,

    updateFormData,
    handleChange,
    handleSubmit,

    getFormValues,
    resetForm,
    validate,
  };
};

export default useForm;
