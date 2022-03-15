import styled from "styled-components"

export const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${props => (props.secondary ? '#000000' : 'red')};
  color: #fff;
  padding: 10px 15px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
`