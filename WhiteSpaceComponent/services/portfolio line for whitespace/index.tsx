const queryfetchXml = (id: string) => {
  let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
  <entity name="swo_portfoliolinesforwhitespace">
    <attribute name="swo_portfoliolinesforwhitespaceid" />
    <attribute name="swo_name" />
    <order attribute="swo_name" descending="false" />
    <filter type="and">
      <condition attribute="swo_enable" operator="eq" value="1" />
      <condition attribute="swo_historywhitespaceapid" operator="eq" uitype="swo_historywhitespaceap" value="${id}" />
    </filter>
  </entity>
</fetch>`;

  return `?fetchXml=${encodeURIComponent(fetchXml)}`;
};

export const RetrievePortfolioLineForWhitespace = async (
  context: any,
  id: any,
) =>
  context.webAPI.retrieveMultipleRecords(
    'swo_portfoliolinesforwhitespace',
    queryfetchXml(id),
  );
