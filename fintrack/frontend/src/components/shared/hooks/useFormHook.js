"use client";

import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function useFormHook({ source } = {}) {
  const innerForm = useForm({
    mode: "all",
  });
  const action = source?.action;
  const [isDataLoaded, setDataLoaded] = useState(false);

  const form = source?.useForm ? source.useForm : innerForm;

  const { reset, getValues, trigger } = form;

  // Subscribe to dirtyFields so it is up to date when read later
  const dirtyFields = form.formState?.dirtyFields;

  const getData = useCallback(() => getValues(), [getValues]);

  const initData = useCallback(
    (data = {}) => {
      reset((formValues) => ({ ...formValues, ...data }));
      setDataLoaded(true);
    },
    [reset],
  );

  const commitDataToDefaultValues = useCallback(() => {
    const data = getValues();
    reset((formValues) => ({ ...formValues, ...data }));
  }, [getValues, reset]);

  const getModifiedOnlyData = useCallback(() => {
    const data = getValues();
    const modified = {};
    const dirty = form.formState?.dirtyFields || dirtyFields || {};

    Object.keys(dirty).forEach((key) => {
      if (dirty[key] && data[key] !== undefined) {
        modified[key] = data[key];
      }
    });

    return modified;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getValues, dirtyFields]);

  // Validate after data is loaded for "get" / "clone" actions
  useEffect(() => {
    if ((action === "get" || action === "clone") && isDataLoaded) {
      const timer = setTimeout(() => trigger(), 50);
      return () => clearTimeout(timer);
    }
  }, [action, isDataLoaded, trigger]);

  return {
    useForm: form,
    isDataLoaded,
    initData,
    getData,
    commitDataToDefaultValues,
    getModifiedOnlyData,
  };
}

export default useFormHook;
