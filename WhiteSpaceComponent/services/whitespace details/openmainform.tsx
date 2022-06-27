export const OpenWhitespaceMainForm = (context: any, id: string) => {
  let entityFormOptions = {
    entityName: 'swo_whitespacedetail',
    entityId: id,
  };
  return context.navigation.openForm(entityFormOptions);
};
