import * as React from 'react';
import { Wrapper } from './wrapper';
import { Input } from '../Input';

export const InputsContainer = (props: any) => {
  const { quantities } = props;
  const inputValues = quantities.map((row: any) => <Input quantity={0} />);

  return <Wrapper>{inputValues}</Wrapper>;
};
