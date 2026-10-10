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

const getRecordFromResponse = (response) => {
  const data = response?.data;
  return Array.isArray(data) ? (data[0] ?? null) : (data ?? null);
};

const useFormApi = ({ entityName, action, recordId, formMethods }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const updateFormData = useSelector(
    (state) => state.formDataSlice?.updateFormData?.[entityName] ?? {},
  );
  const isUpdate = ["get", "edit"].includes(String(action ?? "").toLowerCase());

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
          filterCondition: {
            field: "id",
            operator: "equal",
            value: id,
          },
          recordCount: 1,
        });

        const record = getRecordFromResponse(response);

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

        dispatch(setUpdateFormData({ [entityName]: {} }));
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

  const saveData = useCallback(async () => {
    if (!entityName) {
      setError("An entity is required to save this form.");
      return null;
    }

    if (isUpdate && recordId == null) {
      setError("A record ID is required to update this record.");
      return null;
    }

    const fields = updateFormData;

    if (!fields || Object.keys(fields).length === 0) {
      return isUpdate ? { success: true, unchanged: true } : null;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await saveApi({
        objName: entityName,
        fields,
        ...(isUpdate ? { id: recordId } : {}),
      });

      if (!response || response.success === false) {
        throw new Error(response?.message || "The record could not be saved.");
      }

      return response;
    } catch (requestError) {
      setError(requestError.message || "Unable to save this form.");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [action, dispatch, entityName, formMethods, recordId, updateFormData]);

  return {
    getData,
    saveData,
    isLoading,
    error,
  };
};

export default useFormApi;
