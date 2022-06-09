import * as React from 'react';
import { useState, useEffect } from 'react';

export const RetrieveLicenseModels = (props: any) => {
  const { context } = props;

  const queryfetchXml = () => {
    let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="true">
    <entity name="swo_licensemodel">
      <attribute name="swo_name" />
      <attribute name="swo_manufacturerid" />
      <attribute name="swo_code" />
      <attribute name="swo_showinlookup" />
      <attribute name="swo_projectcreationrequired" />
      <attribute name="swo_subjectlayerid" />
      <attribute name="swo_licensemodelid" />
      <order attribute="swo_name" descending="false" />
      <filter type="and">
        <condition attribute="statecode" operator="eq" value="0" />
      </filter>
      <link-entity name="opportunityproduct" from="swo_licensemodel" to="swo_licensemodelid" link-type="inner" alias="ae">
        <link-entity name="swo_subjectlayer" from="swo_subjectlayerid" to="swo_subjectlayerid" link-type="inner" alias="af">
          <filter type="and">
            <condition attribute="statecode" operator="eq" value="0" />
            <condition attribute="swo_practicelayerid" operator="eq" uitype="swo_practicelayer" value="{AB24C2F2-4C1B-EA11-A811-000D3A3A1BE9}" />
          </filter>
        </link-entity>
      </link-entity>
    </entity>
  </fetch>`;

    return `?fetchXml=${encodeURIComponent(fetchXml)}`;
  };

  const [licenseModelData, setLicenseModelData] = useState([]);
  useEffect(() => {
    RetrieveAllLicenseModel();
  }, []);

  const RetrieveAllLicenseModel = async () => {
    const data = await context.webAPI.retrieveMultipleRecords(
      'swo_licensemodel',
      queryfetchXml(),
    );
    console.log(JSON.stringify(data));
    const datajson = data.Entity;
    setLicenseModelData(datajson);
  };

  return <div> {JSON.stringify(RetrieveAllLicenseModel)}</div>;
};
