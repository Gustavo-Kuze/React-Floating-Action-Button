import React from 'react';
import fabStyles from './styles/fab.css';

const Container = ({
  styles,
  className,
  children,
  isOpen,
  onMouseLeave,
  onMouseEnter,
}) => {
  return (
    <nav
      className={`${fabStyles['fab-container']} ${
        fabStyles[isOpen ? 'fab-container-open' : 'fab-container-closed']
      } ${className}`}
      style={styles}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </nav>
  );
};

export default Container;
