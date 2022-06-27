import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 124px;
  grid-template-rows: 152px 120px minmax(70px, auto);
  grid-auto-rows: minmax(35px, auto);
  font-size: 12px;

  .top-left-bar {
    grid-column: 1;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: 124px;
    grid-template-rows: 74px 73px;

    .practice-text {
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(110, 111, 119);
      border-top: solid 1px #e1dfdd;
      border-bottom: solid 1px #e1dfdd;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: solid 1px #e1dfdd;

      .select-currency {
        width: 94px;
        height: 40px;
        font-size: 14px;
      }
    }
  }

  .middle-left-bar {
    grid-column: 1;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 124px;
    grid-template-rows: 45px 70px;
    justify-content: start;
    align-items: start;

    .total-text {
      grid-row: 1 / 2;
      font-size: 11px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .total-value {
      grid-row: 2 / 3;
      font-weight: 500;
      font-size: 14px;
      display: flex;
      justify-content: right;
      margin-right: 10px;
    }
  }
  .bottom-left-bar {
    grid-row: 3 / 4;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: blueviolet; */
  }
`;
