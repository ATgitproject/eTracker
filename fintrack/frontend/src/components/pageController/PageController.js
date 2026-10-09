"use client";

import { useCallback, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import PagePanelController from "./PagePanelController";
import PageRenderer from "../pageRenderer/pageRenderer";
import useFormApi from "../shared/hooks/useFormApi";
import usePageActionMiddleware from "../shared/hooks/usePageActionMiddleware";
import usePageComponentController from "../shared/hooks/usePageComponentController";

const PageController = ({ page }) => {
  const dispatch = useDispatch();
  const [panel, setPanel] = useState(null);
  const formMethods = useForm({ mode: "all" });

  const entityName =
    panel?.props?.toolbar?.entity_name ||
    panel?.props?.toolbar?.ENTITYNAME ||
    page?.entity_name ||
    page?.ENTITYNAME;

  const recordId = panel?.props?.row?.id ?? panel?.props?.row;

  const { getData, isLoading, error, onSave, onClose, clearFormState } =
    usePageActionMiddleware({
      formMethods,
      setPanel,
      entityName,
      action: panel?.action,
      recordId,
    });

  const { showPageComponent } = usePageComponentController({
    setPanel,
    formMethods,
    onClose,
    onSave,
    clearFormState,
  });

  useEffect(() => {
    if (panel?.action === "get" && recordId != null) {
      getData(recordId).catch(() => {});
    }
  }, [getData, panel?.action, recordId]);

  return (
    <FormProvider {...formMethods}>
      <PageRenderer
        page={page}
        showPageComponent={showPageComponent}
        useForm={formMethods}
      />

      {panel && panel.panelType !== "fields" && (
        <PagePanelController
          component={panel.component}
          props={panel.props}
          panelType={panel.panelType}
          width={panel.width}
          action={panel.action}
          title={panel.title}
          onClose={onClose}
          onSave={onSave}
          useForm={formMethods}
          isSaving={isLoading}
          saveError={error}
        />
      )}
    </FormProvider>
  );
};

export default PageController;
