import * as React from 'react';
import { Wrapper } from './wrapper';

export const Select = (props: any) => {
  const { currencies } = props;
  return <Wrapper>{currencies}</Wrapper>;
};
