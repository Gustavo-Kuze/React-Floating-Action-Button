import './css/FAB.css'
import React, { Component } from 'react'
import { darkColors, lightColors } from './js/MaterialColors'
import PropTypes from 'prop-types'

class Container extends Component {
    render() {
        return (
            <nav className={`fab-container ${props.className}`} style={props.styles}>
                {props.children}
            </nav>
        )
    }
}

class Button extends Component {
    render() {
        return (
            <button onClick={props.onClick}
                className={`fab-item ${props.className} ${props.rotate ? 'fab-rotate' : ''}`}
                tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
                <i className={props.icon} style={props.iconStyles}></i>
                {props.children}
            </button>
        )
    }
}

class Link extends Component {
    render() {
        return (
            <a href={props.href}
                className={`fab-item ${props.className} ${props.rotate ? 'fab-rotate' : ''}`}
                tooltip={props.tooltip} style={props.styles || defaultItemStyles}>
                <i className={props.icon} style={props.iconStyles}></i>
                {props.children}
            </a>
        )
    }
}

const defaultItemStyles = {
    backgroundColor: darkColors.lighterRed,
    color: darkColors.white,
    textDecoration: "none",
    border: "none"
}

export { Container, Link, Button, darkColors, lightColors }
