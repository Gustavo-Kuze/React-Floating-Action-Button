import './css/FAB.css'
import React from 'react'

const Container = props => {
    return (
        <nav className="fab-container"  >
            <a href="#"
                className="fab-item"
                tooltip={"Ação 2"}><i className="far fa-sticky-note"></i></a>
            <a href="#"
                className="fab-item"
                tooltip={"Ação 1"}><i className="fas fa-user-plus"></i></a>
            <button
                className="fab-item"
                tooltip={"Ação 0"}><i className="fas fa-plus"></i></button>
        </nav>
    )
}

const Button = props => {
    return (
        <button>Botão</button>
    )
}

const Link = props => {
    return (
        <a href="#">link</a>
    )
}

export {Container, Link, Button}
