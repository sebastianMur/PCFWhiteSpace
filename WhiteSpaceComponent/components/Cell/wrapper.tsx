import styled from 'styled-components';

interface TdProps {
  readonly bc: string;
  readonly lc: string;
}

export const Wrapper = styled.td<TdProps>`
  background-color: ${(props: any) => props.bc};
  margin-top: 3px;
  height: 70px;
  color: ${(props: any) => props.lc};
  font-weight: bold;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: left;
  }

  div:hover {
    cursor: pointer;
  }
`;
