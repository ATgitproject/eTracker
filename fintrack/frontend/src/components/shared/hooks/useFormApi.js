"use client";

import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData as getApi,
  saveData as saveApi,
} from "../../../services/dataService";
import {
  setFormData,
  setUpdateFormData,
} from "../../../redux/slices/formDataSlice";

const useFormApi = ({ entityName, action, recordId, formMethods }) => {
  const dispatch = useDispatch();
  const updateFormData = useSelector(
    (state) => state.formDataSlice?.updateFormData?.[entityName] ?? {},
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = useCallback(
    async (id = recordId) => {
      if (!entityName || id == null) {
        throw new Error(
          "An entity and record ID are required to load a record.",
        );
      }

      setIsLoading(true);
      setError("");

      try {
        const response = await getApi({
          objName: entityName,
          filterCondition: { field: "id", operator: "equal", value: id },
          recordCount: 1,
        });
        const record = Array.isArray(response?.data)
          ? response.data[0]
          : response?.data;

        if (!record) {
          throw new Error("The requested record was not found.");
        }

        formMethods?.reset(record);
        dispatch(
          setFormData({
            entity_name: entityName,
            [entityName]: record,
          }),
        );
        dispatch(setUpdateFormData({}));
        return record;
      } catch (requestError) {
        setError(requestError.message || "Unable to load the record.");
        throw requestError;
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, entityName, formMethods, recordId],
  );

  const saveData = useCallback(
    async (values = {}) => {
      if (!entityName) {
        setError("An entity is required to save this form.");
        return null;
      }

      const isUpdate = action === "get" || action === "edit";
      const fields = isUpdate ? updateFormData : values;

      if (isUpdate && recordId == null) {
        setError("A record ID is required to update this record.");
        return null;
      }

      if (isUpdate && Object.keys(fields).length === 0) {
        return { success: true, unchanged: true };
      }

      setIsLoading(true);
      setError("");

      try {
        const response = await saveApi({
          objName: entityName,
          fields,
          ...(isUpdate ? { id: recordId } : {}),
        });
        const savedRecords = response?.data ?? values ?? [];
        return savedRecords;
      } catch (requestError) {
        setError(requestError.message || "Unable to save this form.");
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [action, dispatch, entityName, formMethods, recordId, updateFormData],
  );

  return { getData, saveData, isLoading, error };
};

export default useFormApi;
