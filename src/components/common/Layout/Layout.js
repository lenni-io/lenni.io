import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

import './Layout.css'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.body}
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  align-items:center;
  text-align:center;
  justify-content: center;
`

export const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <Wrapper>
          <GlobalStyle />
            {children}
        </Wrapper>
    </ThemeProvider>

)

const theme = {
  colors: {
    body: '#f5f6fa',
    light: '#171b1e',
    primary : '#00a8ff'
  }

}