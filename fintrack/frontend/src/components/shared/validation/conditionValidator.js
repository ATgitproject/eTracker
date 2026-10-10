"use client";
import { setUpdateFormData } from "@/redux/slices/formDataSlice";
import { useDispatch } from "react-redux";

export function ConditionValidator() {
  const dispatch = useDispatch();

  const setDataInReduxUseForm = ({
    useForm,
    entity_name,
    entity_field_name,
    newValue,
  }) => {
    if (Object?.keys(useForm)?.length) {
      const { getValues, resetField } = useForm;
      if (getValues && resetField) {
        resetField(entity_field_name, { defaultValue: newValue });
      }
      dispatch(
        setUpdateFormData({
          entity_name: entity_name,
          [entity_name]: { [entity_field_name]: newValue },
        }),
      );
    }
  };

  const clearData = ({ useForm, entity_name, entity_field_name }) => {
    const currentValue = useForm?.getValues()?.[entity_field_name];
    if (currentValue)
      setDataInReduxUseForm({
        useForm,
        entity_name,
        entity_field_name,
        newValue: "",
      });
  };
  const updateDependentFields = ({
    jsonSource,
    fieldName,
    newValue,
    useForm,
    entity_name,
  }) => {
    return jsonSource?.map((obj) => {
      if (!Array.isArray(obj?.condition)) {
        return obj;
      }

      const matchingConditions = obj.condition.filter(
        (condition) => condition.dependentFieldId === fieldName,
      );

      if (!matchingConditions.length) {
        return obj;
      }

      let updatedObj = { ...obj };

      matchingConditions.forEach((condition) => {
        const isMatched = condition.conditionValue === newValue;

        switch (condition.conditionAction?.toLowerCase()) {
          case "show":
            updatedObj.hidden = !isMatched;
            break;

          case "hide":
            updatedObj.hidden = isMatched;
            break;

          case "mandatory":
            updatedObj.required = isMatched;
            break;
          case "clear":
            isMatched &&
              clearData({
                useForm,
                entity_name,
                entity_field_name: obj?.entity_field_name,
              });
          default:
            break;
        }
      });

      return updatedObj;
    });
  };

  const setDefaultValue = ({
    useForm,
    entity_name,
    entity_field_name,
    newValue,
  }) => {
    if (!useForm?.getValues()?.[entity_field_name]) {
      setDataInReduxUseForm({
        useForm,
        entity_name,
        entity_field_name,
        newValue,
      });
    }
  };

  return {
    updateDependentFields,
    setDefaultValue,
  };
}
