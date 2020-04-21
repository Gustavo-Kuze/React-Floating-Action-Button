import React from 'react';
import fabStyles from './styles/fab.css';
import defaultItemStyles from './styles/defaultItemStyles';

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

export default Link;
