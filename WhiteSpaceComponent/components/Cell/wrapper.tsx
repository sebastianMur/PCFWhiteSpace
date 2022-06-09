import styled from 'styled-components';
import * as React from 'react';

interface TdProps {
  readonly bc: string;
}

export const Wrapper = styled.td<TdProps>`
  background-color: ${(props: any) => props.bc};
`;
