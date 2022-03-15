import styled from "styled-components"
import PropTypes from 'prop-types'
import { StyledButton } from "./styles/App.styled"

const App = () => {
  return (
    <div>
            <StyledButton>Click me</StyledButton>
            <StyledButton secondary>Click for secondary Action</StyledButton>
        </div>
  )
}

export default App
