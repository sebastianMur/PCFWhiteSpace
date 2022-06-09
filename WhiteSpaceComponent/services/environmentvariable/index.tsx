import * as React from 'react';
import { useState, useEffect } from 'react';

export const RetrieveEnvironmentVariable = (props: any) => {
  const { context } = props;

  const queryfetchXml = () => {
    let fetchXml = `<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>
    <entity name='environmentvariablevalue'><attribute name='environmentvariablevalueid' />
    <attribute name='value' /><attribute name='createdon' /><order attribute='createdon' descending='true' />
    <link-entity name='environmentvariabledefinition' from='environmentvariabledefinitionid' to='environmentvariabledefinitionid' link-type='inner' alias='ad'>
    <filter type='and'><condition attribute='schemaname' operator='eq' value='swo_ap_applicationid' />
    </filter></link-entity></entity></fetch>`;

    return `?fetchXml=${encodeURIComponent(fetchXml)}`;
  };

  const [environmentVariableData, setEnvironmentVariableData] = useState([]);
  useEffect(() => {
    RetrieveAllEnvironmentVariables();
  }, []);

  const RetrieveAllEnvironmentVariables = async () => {
    const data = await context.webAPI.retrieveMultipleRecords(
      'environmentvariablevalue',
      queryfetchXml(),
    );
    console.log(JSON.stringify(data));
    const datajson = data.Entity;
    setEnvironmentVariableData(datajson);
  };

  return <div> {JSON.stringify(environmentVariableData)}</div>;
};
