import * as React from 'react';
import { useContext } from 'react';
import { Wrapper } from './wrapper';
import useApi from '../../hooks/ApiCalls';
import useAppContext from '../../context/AppContext';
import { UpdateTotalAccountVolume } from '../../services/total account volumes/update';

export const Input = (props: any) => {
  const { quantity, id } = props;
  const { context } = useContext(useAppContext);
  const updateTotalValue = useApi(UpdateTotalAccountVolume);

  const onFocusOutTotalAccountVolume = (e: any, value: number, id: any) => {
    updateTotalValue.request(context, id, e.target.value);
  };

  return (
    <Wrapper
      name={props.name}
      onBlur={(e: any) => onFocusOutTotalAccountVolume(e, quantity, id)}
      defaultValue={quantity}
      type='text'
    />
  );
};
