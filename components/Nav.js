import React from 'react';
import navStyles from "../css/nav.module.css";
import dropdownStyles from "../css/dropdown.module.css";

const Nav = () => {
    return (
      <div>
        <div>
          <a href="https://github.com/gwonkim">Gwonkim</a>
        </div>
        <div className={dropdownStyles.menu}>
          <div className={navStyles.square}></div>
          <span>
            <a className={navStyles.titleLink} href="/pages/javascript.html">
              JavaScript
            </a>
          </span>
          <span>
            <a className={navStyles.titleLink} href="/pages/git.html">
              Git
            </a>
          </span>
          <span>
            <a className={navStyles.titleLink} href="/pages/regExp.html">
              RegExp
            </a>
          </span>
          <span>
            <a className={navStyles.titleLink} href="/pages/etc.html">
              Etc
            </a>
          </span>
          <span>
            <a className={navStyles.titleLink} href="/pages/unix.html">
              Unix
            </a>
          </span>
          <span>
            <a className={navStyles.titleLink} href="/pages/ubuntu.html">
              Ubuntu
            </a>
          </span>
          <span>
            <a className={navStyles.titleLink} href="/pages/error.html">
              Error
            </a>
          </span>
        </div>
      </div>
    );
};

export default Nav;