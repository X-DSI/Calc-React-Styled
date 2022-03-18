import styled from "styled-components";

export const StyledButton = styled.button``;

export const StyledContainer = styled.div`
  /* background-color: black; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* justify-content: center; */
  /* align-items: center; */

  .tbox {
    display: grid;
    grid-column-start: 1;
    grid-column-end: 4;
    /* background: #000;
    color: #fff; */
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    font-size: 15px;
    font-family: inherit;
  }

  .equals {
    display: grid;
    grid-column: 3/5;
  }
`;

export const StyledGrid = styled.div``;
