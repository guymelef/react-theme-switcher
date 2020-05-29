import React from 'react'
import ThemeToggler from './ThemeToggler'



const Header = () => {
    const headerStyles = {
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        maxWidth: '600px',
        margin: '0 auto'
    }
    
    return (
        <header style={headerStyles}>
            <h1>React Context API Demo</h1>
            <ThemeToggler />
        </header>
    )
}


export default Header