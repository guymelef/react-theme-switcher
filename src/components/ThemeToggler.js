import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    
    const themeTogglerStyle = {
        cursor: 'pointer'
    }

    const spanStyle = {
        fontSize: '1.7rem'
    }

    return (
        <div 
            style={themeTogglerStyle}
            onClick={toggleTheme}
        >
            <span style={spanStyle} title={`Switch to ${theme === "light" ? "dark" : "light"}?`}>
                {theme === "light" ? "🌞" : "🌚"}
            </span>
        </div>
    )
}


export default ThemeToggler