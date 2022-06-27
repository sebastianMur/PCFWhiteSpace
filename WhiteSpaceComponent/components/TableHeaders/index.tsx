import * as React from 'react';
import { Wrapper } from './wrapper';
import { Th } from '../Th';
import { Tr } from '../Tr';

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

export const TableHeaders = (props: any) => {
  const { headerNames, filterValuesby } = props;

  const filterHeaderNames = takeTheTableFilter(filterValuesby, headerNames);
  const headerNameValues = filterHeaderNames.map((thCell: any) => (
    <Th name={thCell['swo_name']} />
  ));

  return (
    <Wrapper>
      <thead>
        <Tr headerNames={headerNameValues} />
      </thead>
    </Wrapper>
  );
};
