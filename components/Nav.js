import React from 'react';
import navStyles from "../css/nav.module.css";

const Nav = () => {
    return (
      <div className={navStyles.nav}>
          <div className={navStyles.square}></div>
            <a href='../pages/study.js'>STUDY</a>
      </div>
    );
};

export default Nav;
