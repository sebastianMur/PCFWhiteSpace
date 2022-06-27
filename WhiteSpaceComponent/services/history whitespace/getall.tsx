const queryfetchXml = (context: any) => {
  let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="swo_historywhitespaceap">
    <attribute name="swo_historywhitespaceapid" />
    <attribute name="swo_year" />
    <attribute name="swo_totalaccountvolume" />
    <attribute name="swo_currecyaccountplanningid" />
    <order attribute="swo_year" descending="true" />
    <filter type="and">
    <condition attribute="swo_whitespaceid" operator="eq" uitype="swo_whitespace" value="${context.parameters.Data.sortedRecordIds[0]}" />
    </filter></entity></fetch>`;

  return `?fetchXml=${encodeURIComponent(fetchXml)}`;
};

export const GetAllHistoryWhitespace = (context: any) => {
  return context.webAPI.retrieveMultipleRecords(
    'swo_historywhitespaceap',
    queryfetchXml(context),
  );
};
