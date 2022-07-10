/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <h2>Test</h2>
      </div>
    </ThemeProvider>
  )
}
