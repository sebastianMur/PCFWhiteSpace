import * as React from 'react';
import { Wrapper } from './wrapper';

export const Tr = (props: any) => {
  const { headerNames } = props;
  return <Wrapper columns={headerNames.length}>{headerNames}</Wrapper>;
};
