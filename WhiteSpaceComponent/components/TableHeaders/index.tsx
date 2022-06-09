import * as React from 'react';
import { Wrapper } from './wrapper';
import { Th } from '../Th';
import { Tr } from '../Tr';

export const TableHeaders = (props: any) => {
  const { headerNames } = props;

  const headerNameValues = headerNames.map((thCell: any) => (
    <Th name={thCell['Practice Layer']} />
  ));

  return (
    <Wrapper>
      <thead>
        <Tr headerNames={headerNameValues} />
      </thead>
    </Wrapper>
  );
};
