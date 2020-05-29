import React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import { ThemeProvider } from './context/ThemeContext'


const App = () => {
  return (
    <ThemeProvider>
        <Header />
        <Main />
    </ThemeProvider>
  )
}


export default App