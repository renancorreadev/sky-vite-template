/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@styles/themes/default'
import { GlobalStyle } from '@styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '@routes/Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
