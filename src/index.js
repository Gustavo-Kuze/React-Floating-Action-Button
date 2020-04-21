import fabStyles from './fab.css';
import React from 'react';
import { darkColors, lightColors } from './materialColors';

const Container = ({ styles, className, children }) => {
  return (
    <nav
      className={`${fabStyles['fab-container']} ${className}`}
      style={styles}
    >
      {children}
    </nav>
  );
};

const Button = ({
  styles,
  className,
  children,
  onClick,
  rotate,
  tooltip,
  iconStyles,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${fabStyles['fab-item']} ${className} ${
        rotate ? fabStyles['fab-rotate'] : ''
      }`}
      tooltip={tooltip}
      style={styles || defaultItemStyles}
    >
      <i className={icon} style={iconStyles} />
      {children}
    </button>
  );
};

const Link = ({
  styles,
  className,
  children,
  onClick,
  rotate,
  tooltip,
  iconStyles,
  href,
  icon,
  target,
}) => {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`${fabStyles['fab-item']} ${className} ${
        rotate ? fabStyles['fab-rotate'] : ''
      }`}
      tooltip={tooltip}
      style={styles || defaultItemStyles}
      target={target}
    >
      <i className={icon} style={iconStyles} />
      {children}
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
