export const UpdateHistoryWhitespace = (
  context: any,
  id: string,
  currencyid: string,
) => {
  if (id) {
    const data = {
      'swo_currecyaccountplanningid@odata.bind': `/swo_currecyaccountplannings(${currencyid})`,
    };

    return context.webAPI.updateRecord('swo_historywhitespaceap', id, data);
  }
};
