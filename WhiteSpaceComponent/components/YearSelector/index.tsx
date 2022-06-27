import * as React from 'react';
import { useEffect, useContext } from 'react';
import useApi from '../../hooks/apiCalls';
import useAppContext from '../../context/AppContext';
import { GetAllHistoryWhitespace } from '../../services/history whitespace/getall';
import { historydata } from '../../data/History';
import { Wrapper } from './wrapper';

export const DropdownRequiredYear = (props: any) => {
  const { SelectHandle, historyWhistespaceRecord } = props;
  const { context } = useContext(useAppContext);
  const getHistories = useApi(GetAllHistoryWhitespace);

  useEffect(() => {
    getHistories.request(context);
  }, []);

  const Select = (allHistories: any) => {
    return (
      <select
        value={historyWhistespaceRecord['swo_historywhitespaceapid']}
        onChange={(e: any) => SelectHandle(e, allHistories)}
      >
        {allHistories.entities.map((historyWhitespace: any) => (
          <option
            key={historyWhitespace.swo_historywhitespaceapid}
            value={historyWhitespace.swo_historywhitespaceapid}
          >
            {historyWhitespace.swo_year}
          </option>
        ))}
      </select>
    );
  };

  return (
    <Wrapper className='select-container'>
      {getHistories.data && Select(getHistories.data)}
      {getHistories.error && Select(historydata)}
    </Wrapper>
  );
};
