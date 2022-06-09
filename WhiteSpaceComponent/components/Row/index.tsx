import * as React from 'react';
import { Wrapper } from './wrapper';
import { Cell } from '../Cell';

export const Row = (props: any) => {
  let td = props.cells.map((cells: any) => {
    <Cell name={cells.name} bc={cells.bc} />;
  });

  return <Wrapper>{td}</Wrapper>;
};
