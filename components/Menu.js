import React from 'react';
import menuStyle from '../css/menu.module.css';

const Menu = () => {
    return (
      <div className={menuStyle.menu}>
        <h2>profile</h2>
        <h2>study</h2>
        <h2>project</h2>
      </div>
    );
};

export default Menu;
