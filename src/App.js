import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import PropTypes from 'prop-types'
import { StyledButton } from "./styles/App.styled"
import { GlobalStyles } from "./styles/globalstyles"
import { lightTheme, darkTheme } from "./styles/Themes"
import React, { useState, useEffect } from "react"

const App = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
          {
            }
        </div>
      </>
    </ThemeProvider>
    // <div>
    //   <StyledButton>Click me</StyledButton>
    //   <StyledButton secondary>Click for secondary Action</StyledButton>
    // </div>
  );
};

export default App
