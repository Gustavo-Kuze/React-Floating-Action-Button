import styles from './fab.css';
import React from 'react';
import { darkColors, lightColors } from './materialColors';

const Container = (props) => {
  return (
    <nav
      className={`${styles['fab-container']} ${props.className}`}
      style={props.styles}
    >
      {props.children}
    </nav>
  );
};

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles['fab-item']} ${props.className} ${
        props.rotate ? styles['fab-rotate'] : ''
      }`}
      tooltip={props.tooltip}
      style={props.styles || defaultItemStyles}
    >
      <i className={props.icon} style={props.iconStyles} />
      {props.children}
    </button>
  );
};

const Link = (props) => {
  return (
    <a
      href={props.href}
      className={`${styles['fab-item']} ${props.className} ${
        props.rotate ? styles['fab-rotate'] : ''
      }`}
      tooltip={props.tooltip}
      style={props.styles || defaultItemStyles}
    >
      <i className={props.icon} style={props.iconStyles} />
      {props.children}
    </a>
  );
};

const defaultItemStyles = {
  backgroundColor: darkColors.lighterRed,
  color: darkColors.white,
  textDecoration: 'none',
  border: 'none',
};

export { Container, Link, Button, darkColors, lightColors };
