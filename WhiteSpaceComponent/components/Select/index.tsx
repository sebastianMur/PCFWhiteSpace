import * as React from 'react';
import { useRef } from 'react';
import { RetrieveCurrencies } from '../../services/currencies/getall';
import { UpdateHistoryWhitespace } from '../../services/history whitespace/update';
import useApi from '../../hooks/ApiCalls';
import appContext from '../../context/AppContext';
import { currencies } from '../../data/currencies';

export const Select = (props: any) => {
  const currentCurrency = useRef();
  const { context } = React.useContext(appContext);
  const { id } = props;
  const getallCurrencies = useApi(RetrieveCurrencies);
  const updateCurrency = useApi(UpdateHistoryWhitespace);

  React.useEffect(() => {
    currentCurrency.current = id;
    getallCurrencies.request();
  }, []);

  const options = (allCurrencies: any) => {
    return allCurrencies.entities.map((currency: any) => (
      <option
        key={currency['swo_currecyaccountplanningid']}
        value={currency['swo_currecyaccountplanningid']}
      >
        {currency['swo_code']}
      </option>
    ));
  };

  const selectHandle = (e: any, context: any, historyid: string) => {
    currentCurrency.current = e.target.value;
    console.log(
      ' currencyid: ' + currentCurrency.current + ' historyid: ' + historyid,
    );
    updateCurrency.request(context, historyid, currentCurrency.current);
  };

  return (
    <div>
      {getallCurrencies.data && (
        <select
          value={currentCurrency.current}
          onChange={(e: any) => selectHandle(e, context, id)}
          className='select-currency'
        >
          {options(getallCurrencies.data)}
        </select>
      )}
      {getallCurrencies.error && (
        <select
          value={currentCurrency.current}
          onChange={(e: any) => selectHandle(e, context, id)}
          className='select-currency'
        >
          {options(currencies)}
        </select>
      )}
    </div>
  );
};
