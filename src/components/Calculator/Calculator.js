import React from "react";
import { StyledContainer } from "./Calculator.styled";
import { StyledButton, TextBox } from "../../styles/App.styled";
import { useRef, useState, useEffect } from "react";

const Calculator = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("testing...");
  }, []);

  const onButtonClick = (e) => {
    if (e.target.value === "clear") {
      setInputValue("");
    } else {
      if (inputRef.current.value === undefined) {
        setInputValue(e.target.value);
      } else {
        setInputValue(inputValue + e.target.value);
      }
    }
    console.log(inputRef);
  };

  const calculate = () => {
    let result = eval(inputValue);
    console.log(result);
    setInputValue(result);
  };

  return (
    <StyledContainer>
      <header />
      <TextBox type="text" ref={inputRef} value={inputValue}></TextBox>
      <StyledButton value="clear" onClick={onButtonClick}>
        C
      </StyledButton>
      <StyledButton value="7" onClick={onButtonClick}>
        7
      </StyledButton>
      <StyledButton value="8" onClick={onButtonClick}>
        8
      </StyledButton>
      <StyledButton value="9" onClick={onButtonClick}>
        9
      </StyledButton>
      <StyledButton value="*" onClick={onButtonClick}>
        x
      </StyledButton>
      <StyledButton value="4" onClick={onButtonClick}>
        4
      </StyledButton>
      <StyledButton value="5" onClick={onButtonClick}>
        5
      </StyledButton>
      <StyledButton value="6" onClick={onButtonClick}>
        6
      </StyledButton>
      <StyledButton value="-" onClick={onButtonClick}>
        -
      </StyledButton>
      <StyledButton value="1" onClick={onButtonClick}>
        1
      </StyledButton>
      <StyledButton value="2" onClick={onButtonClick}>
        2
      </StyledButton>
      <StyledButton value="3" onClick={onButtonClick}>
        3
      </StyledButton>
      <StyledButton value="+" onClick={onButtonClick}>
        +
      </StyledButton>
      <StyledButton value="0" onClick={onButtonClick}>
        0
      </StyledButton>
      <StyledButton value="/" onClick={onButtonClick}>
        /
      </StyledButton>
      <StyledButton equal value="equals" onClick={calculate}>
        =
      </StyledButton>
    </StyledContainer>
  );
};

export default Calculator;
