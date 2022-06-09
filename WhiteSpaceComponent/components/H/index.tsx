import * as React from 'react';
import { Wrapper } from './wrapper';

export const H = (props: any) => {
  return (
    <div>
      <Wrapper>{props.name}</Wrapper>
    </div>
  );
};
