import './css/FAB.css'
import React from 'react'

const Container = props => {
    return (
        <nav className="fab-container">
            {props.children}
        </nav>
    )
}

const Button = props => {
    return (
        <button onClick={props.onClick}
            className={`fab-item ${props.className} ${props.stopRotation ? '' : 'fab-rotate'}`}
            tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
            <i className={props.icon} style={props.iconStyles}></i>
        </button>
    )
}

const Link = props => {
    return (
        <a href={props.href}
            className={`fab-item ${props.className} ${props.stopRotation ? '' : 'fab-rotate'}`}
            tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
            <i className={props.icon} style={props.iconStyles}></i>
        </a>
    )
}

const defaultItemStyles = {
    backgroundColor: "#f44336",
    color: "#FAFAFA",
    textDecoration: "none",
    border: "none"
}

export { Container, Link, Button }
