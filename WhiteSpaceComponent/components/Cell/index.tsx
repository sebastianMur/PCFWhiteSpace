import * as React from 'react';
import { Wrapper } from './wrapper';

export const Cell = (props: any) => {
  return <Wrapper bc={props.bc}>{props.name}</Wrapper>;
};
