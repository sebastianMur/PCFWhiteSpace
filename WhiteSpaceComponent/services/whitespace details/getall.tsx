const queryfetchXml = (id: string) => {
  let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
  <entity name="swo_whitespacedetail">
  <attribute name="swo_whitespacedetailid" />
  <attribute name="swo_soldby" />
  <attribute name="swo_name" />
  <attribute name="swo_licensemodelid" />
  <attribute name="swo_manufacturerid" />
  <attribute name="swo_portfoliolinesforwhitespaceid" />
  <filter type="and">
  <condition attribute="statecode" operator="eq" value="0" />
  </filter>
  <link-entity name="swo_portfoliolinesforwhitespace" from="swo_portfoliolinesforwhitespaceid" to="swo_portfoliolinesforwhitespaceid" link-type="inner" alias="ae">
  <attribute name="swo_name" />
  <filter type="and">
  <condition attribute="swo_enable" operator="eq" value="1" />
  </filter>
  <link-entity name="swo_historywhitespaceap" from="swo_historywhitespaceapid" to="swo_historywhitespaceapid" link-type="inner" alias="ao">
  <filter type="and"><condition attribute="swo_historywhitespaceapid" operator="eq"  uitype="swo_historywhitespaceap" value="${id}" />
  </filter></link-entity></link-entity></entity></fetch>`;

  return `?fetchXml=${encodeURIComponent(fetchXml)}`;
};

export const RetrieveWhitespaceDetails = (context: any, id: string) => {
  return context.webAPI.retrieveMultipleRecords(
    'swo_whitespacedetail',
    queryfetchXml(id),
  );
};
