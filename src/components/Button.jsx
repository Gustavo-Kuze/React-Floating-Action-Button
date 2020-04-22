import React from 'react';
import fabStyles from './styles/fab.css';
import defaultItemStyles from './styles/defaultItemStyles';

const Button = ({
  styles,
  className,
  children,
  onClick,
  rotate,
  tooltip,
  iconStyles,
  icon,
  onMouseLeave,
  onMouseEnter,
}) => {
  return (
    <button
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
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

export default Button;
