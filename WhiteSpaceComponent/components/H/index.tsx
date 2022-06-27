import * as React from 'react';
import { Wrapper } from './wrapper';

export const H = (props: any) => {
  return (
    <Wrapper>
      <h3>{props.name}</h3>
    </Wrapper>
  );
};
