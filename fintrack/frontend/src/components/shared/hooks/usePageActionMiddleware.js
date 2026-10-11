"use client";

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setFormData, setUpdateFormData } from "@/redux/slices/formDataSlice";
import useFormApi from "./useFormApi";

const usePageActionMiddleware = ({
  formMethods,
  setPanel,
  entityName,
  action,
  recordId,
}) => {
  const dispatch = useDispatch();

  const { getData, saveData, deleteData, isLoading, error } = useFormApi({
    entityName,
    action,
    recordId,
    formMethods,
  });

  const clearFormState = useCallback(() => {
    if (entityName) {
      dispatch(setUpdateFormData({ [entityName]: {} }));

      dispatch(
        setFormData({
          operation: "deleteObj",
          entity_name: entityName,
        }),
      );
    }

    formMethods?.reset({});
  }, [dispatch, entityName, formMethods]);

  const onClose = useCallback(() => {
    clearFormState();
    setPanel(null);
  }, [clearFormState, setPanel]);

  const onSave = useCallback(
    async (formValues = {}) => {
      const result = await saveData(formValues);

      if (!result || result.success === false) {
        return false;
      }

      clearFormState();
      setPanel(null);

      return true;
    },
    [saveData, clearFormState, setPanel],
  );

  const onDelete = useCallback(
    async ({ entityName: entity, recordId: id } = {}) => {
      const result = await deleteData({
        objName: entity,
        id,
      });

      if (!result || result.success === false) {
        return false;
      }

      clearFormState();
      setPanel(null);

      return true;
    },
    [deleteData, clearFormState, setPanel],
  );

  return {
    getData,
    saveData,
    deleteData,
    isLoading,
    error,
    onSave,
    onDelete,
    onClose,
    clearFormState,
  };
};

export default usePageActionMiddleware;
