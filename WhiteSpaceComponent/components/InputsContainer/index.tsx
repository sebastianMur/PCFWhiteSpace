import * as React from 'react';
import { Wrapper } from './wrapper';
import { Input } from '../Input';

const takeTheTableFilter = (filterTable: any, arrayForFilter: any) => {
  return filterTable.includes('transactional-business')
    ? arrayForFilter.entities.filter(
        (totalAccountVolume: any) =>
          totalAccountVolume.swo_name === 'Microsoft (MS)' ||
          totalAccountVolume.swo_name === 'Multivendor (MV)',
      )
    : arrayForFilter.entities.filter(
        (totalAccountVolume: any) =>
          totalAccountVolume.swo_name !== 'Microsoft (MS)' &&
          totalAccountVolume.swo_name !== 'Multivendor (MV)',
      );
};

export const InputsContainer = (props: any) => {
  const { filterValuesby, quantities } = props;
  const filterQuantities = takeTheTableFilter(filterValuesby, quantities);

  const inputValues = filterQuantities.map((row: any) => (
    <Input quantity={row['swo_total']} id={row['swo_totalaccountvolumeapid']} />
  ));

  return <Wrapper columns={filterQuantities.length}>{inputValues}</Wrapper>;
};
