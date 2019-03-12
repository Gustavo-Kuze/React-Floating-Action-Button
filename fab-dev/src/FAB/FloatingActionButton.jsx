import './css/FAB.css'
import React, { Component } from 'react'
import { darkColors, lightColors } from './js/MaterialColors'
import PropTypes from 'prop-types'

/**
 * @param {{className: string, styles: object}}
 */
class Container extends Component {
    render() {
        return (
            <nav className={`fab-container ${this.props.className}`} style={this.props.styles}>
                {this.props.children}
            </nav>
        )
    }
}

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick}
                className={`fab-item ${this.props.className} ${this.props.rotate ? 'fab-rotate' : ''}`}
                tooltip={this.props.tooltip} style={this.props.styles || defaultItemStyles}>
                <i className={this.props.icon} style={this.props.iconStyles}></i>
                {this.props.children}
            </button>
        )
    }
}

class Link extends Component {
    render() {
        return (
            <a href={this.props.href}
                className={`fab-item ${this.props.className} ${this.props.rotate ? 'fab-rotate' : ''}`}
                tooltip={this.props.tooltip} style={this.props.styles || defaultItemStyles}>
                <i className={this.props.icon} style={this.props.iconStyles}></i>
                {this.props.children}
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

Container.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object
}

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    rotate: PropTypes.bool,
    tooltip: PropTypes.string,
    styles: PropTypes.object,
    icon: PropTypes.string,
    iconStyles: PropTypes.object
}

Link.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    rotate: PropTypes.bool,
    tooltip: PropTypes.string.isRequired,
    styles: PropTypes.object,
    icon: PropTypes.string,
    iconStyles: PropTypes.object
}

export { Container, Link, Button, darkColors, lightColors }
