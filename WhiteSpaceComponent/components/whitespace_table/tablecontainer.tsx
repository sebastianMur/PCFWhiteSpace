import * as React from 'react';
import { H } from '../H';
import { TableHeaders } from '../TableHeaders';
import { TableBody } from '../TableBody';
import { InputsContainer } from '../InputsContainer';
import { Wrapper } from './wrapper';

export const TableContainer = (props: any) => {
  const spanCols = props.className.includes('transactional-business')
    ? 'span 3'
    : 'span 5';

  return (
    <Wrapper colSpan={spanCols}>
      <H name={props.name} />
      <TableHeaders headerNames={props.data} />
      <InputsContainer quantities={props.data} />
      {/* <TableBody rows={{}} /> */}
    </Wrapper>
  );
};
