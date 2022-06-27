import * as React from 'react';
import { useState, useEffect } from 'react';
import { TableContainer } from '../whitespace_table/tablecontainer';
import { LeftTitlesBar } from '../Lefttitlebar';
import { Wrapper } from './wrapper';
import AppContext from '../../context/AppContext';
import { DropdownRequiredYear } from '../../components/YearSelector';
import useApi from '../../hooks/ApiCalls';
import { GetCurrentHistoryWhitespace } from '../../services/history whitespace/getCurrentHistory';
import { currenthistorydata } from '../../data/currenthistory';

export const container = (props: any) => {
  const getCurrentHistoryWhitespace = useApi(GetCurrentHistoryWhitespace);
  const { context } = props;
  const [historyWhistespaceRecord, setHistoryWhitespaceRecord] = useState();
  const ApplicationContext = {
    context,
  };

  useEffect(() => {
    getCurrentHistoryWhitespace.request(context);
  }, []);

  const SelectHandle = (e: any, recordsHistoryWhitespace: any) => {
    const [historyRecord] = recordsHistoryWhitespace.entities.filter(
      (record: any) => record['swo_historywhitespaceapid'] === e.target.value,
    );

    setHistoryWhitespaceRecord(historyRecord);
  };

  const table = (
    historyWhitespaceRecord: any,
    defaultHistoryWhitespace: any,
  ) => {
    const { entities } = defaultHistoryWhitespace;
    const [currentHistoryWhitespace] = entities;

    const historyRecord = historyWhitespaceRecord
      ? historyWhitespaceRecord
      : currentHistoryWhitespace;

    return (
      <>
        <DropdownRequiredYear
          historyWhistespaceRecord={historyRecord}
          SelectHandle={SelectHandle}
        />
        <LeftTitlesBar historyRecord={historyRecord} className='left-bar' />
        <TableContainer
          name='Transactional Business'
          className='transactional-business'
          historyRecord={historyRecord}
          context={props.context}
        />
        <TableContainer
          name='Service Lines'
          className='service-lines'
          historyRecord={historyRecord}
          context={props.context}
        />
      </>
    );
  };

  return (
    <Wrapper className='wrapper-container'>
      <AppContext.Provider value={ApplicationContext}>
        {getCurrentHistoryWhitespace.data &&
          table(historyWhistespaceRecord, getCurrentHistoryWhitespace.data)}
        {getCurrentHistoryWhitespace.error &&
          table(historyWhistespaceRecord, currenthistorydata)}
      </AppContext.Provider>
    </Wrapper>
  );
};
