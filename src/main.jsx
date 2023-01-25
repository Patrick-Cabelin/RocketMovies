import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'

import GlobalStyle from './assets/theme/global'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme/theme'

////////
// import { SignIn } from './assets/pages/SignIn'
import { SignUp } from './assets/pages/SignUp'

////////
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <SignUp />

    </ThemeProvider>
  </React.StrictMode>,
)
