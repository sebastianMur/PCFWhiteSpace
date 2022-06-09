import * as React from 'react';
import { Wrapper } from './wrapper';
import { TopLeftBarContainer } from './topLeftBarContainer';
import { MiddleLeftBarContainer } from './middleleftbarcontainer';
import { BottomLeftBarContainer } from './bottomleftbarcontainer';
import { Select } from '../Select';
export const LeftTitlesBar = (props: any) => {
  return (
    <Wrapper>
      <TopLeftBarContainer>
        <Select />
        <p>Practice</p>
      </TopLeftBarContainer>
      <MiddleLeftBarContainer>total ammount value</MiddleLeftBarContainer>
      <BottomLeftBarContainer>Portafolio line</BottomLeftBarContainer>
    </Wrapper>
  );
};
