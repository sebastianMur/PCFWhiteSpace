const queryfetchXml = (id: string) => {
  let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="swo_totalaccountvolumeap">
  <attribute name="swo_totalaccountvolumeapid" />
  <attribute name="swo_portfoliolinesforwhitespaceid" />
  <attribute name="swo_name" /><attribute name="swo_total" />
  <order attribute="swo_name" descending="false" />
  <link-entity name="swo_portfoliolinesforwhitespace" from="swo_portfoliolinesforwhitespaceid" to="swo_portfoliolinesforwhitespaceid" link-type="inner" alias="ac">
  <filter type="and"><condition attribute="swo_historywhitespaceapid" operator="eq" uitype="swo_historywhitespaceap" value="${id}" />
  <condition attribute="swo_enable" operator="eq" value="1" />
  </filter></link-entity></entity></fetch>`;

  return `?fetchXml=${encodeURIComponent(fetchXml)}`;
};

export const GetAllTotalAccountVolumes = (context: any, id: string) => {
  return context.webAPI.retrieveMultipleRecords(
    'swo_totalaccountvolumeap',
    queryfetchXml(id),
  );
};
