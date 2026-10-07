const componentMap = {
  "Transactions/addTransaction/addTransactionsRenderer": () =>
    import("../../pages/Transactions/addTransaction/addTransactionsRenderer"),
};

const dynamicComponentImport = async (componentPath) => {
  try {
    const importer = componentMap[componentPath];

    if (!importer) {
      console.error(`Component not registered: ${componentPath}`);
      return null;
    }

    const module = await importer();

    return module?.default || null;
  } catch (error) {
    console.error(`Failed to import component: ${componentPath}`, error);

    return null;
  }
};

export default dynamicComponentImport;
