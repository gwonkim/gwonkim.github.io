import React from 'react';
import navStyles from "../../css/nav.module.css";

const Nav = () => {
    return (
      <div className={navStyles.nav}>
          <div className={navStyles.square}></div>
            <a href="/pages/javascript.html">JavaScript</a>
            <a href="/pages/git.html">Git</a>
            <a href="/pages/regExp.html">RegExp</a>
            <a href="/pages/etc.html">Etc</a>
            <a href="/pages/unix.html">Unix</a>
            <a href="/pages/ubuntu.html">Ubuntu</a>
            <a href="/pages/error.html">Error</a>
      </div>
    );
};

export default Nav;
