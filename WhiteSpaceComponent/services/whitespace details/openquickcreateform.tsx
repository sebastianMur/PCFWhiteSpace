export const OpenQuickCreateForm = (
  context: any,
  id: string,
  portfolioName: string,
) => {
  const entityFormOptions = {
    entityName: 'swo_whitespacedetail',
    useQuickCreateForm: true,
  };
  const formParameters = {
    swo_portfoliolinesforwhitespaceid: id,
    swo_portfoliolinesforwhitespaceidname: portfolioName,
    swo_portfoliolinesforwhitespaceidtype: 'swo_portfoliolinesforwhitespace',
  };

  return context.navigation.openForm(entityFormOptions, formParameters);
};
