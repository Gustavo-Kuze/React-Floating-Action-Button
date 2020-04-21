import React from 'react';
import fabStyles from './styles/fab.css';

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

export default Container;
