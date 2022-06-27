import { useState, useEffect, useRef } from 'react';
import { currencies } from '../../data/currencies';

export const RetrieveCurrencies = (props: any) => {
  const { context } = props;
  const executeRef = useRef(false);

  const queryfetchXml = () => {
    let fetchXml = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
    <entity name="swo_currecyaccountplanning">
      <attribute name="swo_name" />
      <attribute name="swo_code" />
      <attribute name="swo_currecyaccountplanningid" />
      <order attribute="swo_name" descending="false" />
      <filter type="and">
        <condition attribute="statecode" operator="eq" value="0" />
      </filter>
    </entity>
  </fetch>`;

    return `?fetchXml=${encodeURIComponent(fetchXml)}`;
  };

  const [currenciesData, setCurrrenciesData] = useState([]);
  useEffect(() => {
    if (executeRef.current) return;
    RetrieveAllCurrencies();
    executeRef.current = true;
  }, []);

  const RetrieveAllCurrencies = async () => {
    const data = await context.webAPI.retrieveMultipleRecords(
      'swo_currecyaccountplanning',
      queryfetchXml(),
    );
    console.log(data);
    const datajson = data.entities;
    setCurrrenciesData(datajson);
  };

  // return currenciesData;
  return currencies;
};
