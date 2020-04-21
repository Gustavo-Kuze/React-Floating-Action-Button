import React from 'react';
import fabStyles from './styles/fab.css';

const Container = ({ styles, className, children, isOpen }) => {
  return (
    <nav
      className={`${fabStyles['fab-container']} ${
        fabStyles[isOpen ? 'fab-container-open' : 'fab-container-closed']
      } ${className}`}
      style={styles}
    >
      {children}
    </nav>
  );
};

export default Container;
