import * as React from 'react';
import { Wrapper } from './wrapper';
import { TopLeftBarContainer } from './topLeftBarContainer';
import { MiddleLeftBarContainer } from './middleleftbarcontainer';
import { BottomLeftBarContainer } from './bottomleftbarcontainer';
import { Select } from '../Select';

export const LeftTitlesBar = (props: any) => {
  const { historyRecord, className } = props;
  const currencyid = historyRecord['_swo_currecyaccountplanningid_value'];
  return (
    <Wrapper className={className}>
      <TopLeftBarContainer className='top-left-bar'>
        <Select
          currentCurrencyid={currencyid}
          id={historyRecord['swo_historywhitespaceapid']}
        />

        <div className='practice-text'>
          <p>Practice</p>
        </div>
      </TopLeftBarContainer>
      <MiddleLeftBarContainer className='middle-left-bar'>
        <div className='total-text'>
          <div>Total Account Volume in</div>
          <div>k + EUR</div>
        </div>
        <div className='total-value'>1600</div>
      </MiddleLeftBarContainer>
      <BottomLeftBarContainer className='bottom-left-bar'>
        Portafolio line
      </BottomLeftBarContainer>
    </Wrapper>
  );
};
