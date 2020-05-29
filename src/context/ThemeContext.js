import React, { createContext, useReducer } from 'react'
import ThemeReducer from './ThemeReducer'


const ThemeContext = createContext('light')

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, "light")

    const toggleTheme = () => {
        dispatch({
            type: "TOGGLE_THEME"
        })
    }

    return (
        <ThemeContext.Provider value={{
            theme: state,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext