function useFormFields({ useForm }) {
  if (!useForm) {
    return { isModified: false, isSavable: false };
  }

  return {
    isModified: useForm.formState.isDirty,
isSavable: useForm.formState.isValid,
  };
}

export default useFormFields;
