import * as React from 'react';
import { useState, useEffect } from 'react';
import { json } from 'stream/consumers';

export const RetrievePortafolioLine = (props: any) => {
  const { context } = props;
  debugger;
  const [portafolioData, setPortafolioData] = useState([]);
  useEffect(() => {
    RetrieveAllPortafolios();
  }, []);

  const RetrieveAllPortafolios = async () => {
    debugger;

    let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false"><entity name="swo_portafolioline">
    <attribute name="swo_portafoliolineid" />
     <attribute name="swo_practicelayerid" />
     <attribute name="swo_enable" />
     <attribute name="createdon" />
     <filter type="and"><condition attribute="statecode" operator="eq" value="0" />
      </filter>   </entity>  </fetch>`;

    fetchXml = `?fetchXml=${encodeURIComponent(fetchXml)}`;
    const data = await context.webAPI.retrieveMultipleRecords(
      'swo_portafolioline',
      fetchXml,
    );
    console.log(JSON.stringify(data));
    const datajson = data.Entity;
    setPortafolioData(datajson);
  };

  return <div> {JSON.stringify(portafolioData)}</div>;
};
