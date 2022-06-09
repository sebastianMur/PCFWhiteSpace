import * as React from 'react';
import { Wrapper } from './wrapper';
import { Row } from '../Row';
export const TableBody = (props: any) => {
  return (
    <div>
      <Wrapper>
        <tbody>
          {props.rows.map((row: any) => {
            <Row cells={row}></Row>;
          })}
        </tbody>
      </Wrapper>
    </div>
  );
};
