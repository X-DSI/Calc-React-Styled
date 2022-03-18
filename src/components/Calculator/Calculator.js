import React from "react";
import { StyledContainer } from "./Calculator.styled";

const Calculator = () => {
  return (
    <StyledContainer>
      <header />
      <input className="tbox" type="text"></input>
      <button className="Clear">C</button>
      <button className="7">7</button>
      <button className="8">8</button>
      <button className="9">9</button>
      <button className="divide">/</button>

      <button className="4">4</button>
      <button className="5">5</button>
      <button className="6">6</button>
      <button className="multiply">*</button>

      <button className="1">1</button>
      <button className="2">2</button>
      <button className="3">3</button>
      <button className="sub">-</button>

      <button className="0">0</button>
      <button className="add">+</button>
      <button className="equals">=</button>
    </StyledContainer>
  );
};

export default Calculator;
