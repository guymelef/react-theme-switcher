import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import AppTheme from '../Colors'


const Main = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const currentTheme = AppTheme[theme]

    return (
        <main style={{
            margin: '0 auto',
            width: '80%',
            maxWidth: '600px',
            borderRadius: '8px',
            padding: '2rem',
            backgroundColor: currentTheme.backgroundColor,
            color: currentTheme.color,
        }}>
            <h2>This <code>div</code> can switch theme!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptatum!</p>
            <button onClick={toggleTheme}>Switch Theme</button>
        </main>
    )
}


export default Main