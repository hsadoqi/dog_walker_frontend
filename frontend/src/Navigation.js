import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'white',
    background: "blue"
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Home</NavLink>
            <NavLink
                to="/owners"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >Owners</NavLink>
            <NavLink
                to="/newowner"
                exact
                style={link}
                activeStyle={{
                    background: 'darkblue'
                }}
                >New Owner</NavLink>
        </div>
    )
}

export default Navigation