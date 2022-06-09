import * as React from 'react';
import { Wrapper } from './wrapper';
export const Input = (props: any) => {
  const { quantity } = props;

  return <Wrapper name={props.name} defaultValue={quantity} type='text' />;
};
