import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: grid;
  /* height: 100vh;
  width: 100vw; */
  /* background-color: aquamarine; */
  /* box-sizing: border-box; */
`;

export const StyledButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 3px;
  border-radius: 45px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  grid-column: ${(props) => props.equal && "3/5"};
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
`;

export const TextBox = styled.input`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 4;
  /* background: #000;
    color: #fff; */
  text-align: right;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 45px;
  font-size: 15px;
  font-family: inherit;
  box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
`;
