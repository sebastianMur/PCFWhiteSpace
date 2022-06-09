import styled from 'styled-components';

interface DivProps {
  readonly colSpan: string;
}

export const Wrapper = styled.div<DivProps>`
  grid-column-end: ${(props: any) => props.colSpan};
`;
