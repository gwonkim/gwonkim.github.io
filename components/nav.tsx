import React from 'react';
import Link from 'next/link';
import Style from '../styles/nav.module.scss';

const Nav = () => {
  return (
    <div className={Style.nav}>
      <span className={Style.left}>
        <Link href="/">
          <a>GWONKIM</a>
        </Link>
      </span>
      <span className={Style.right}>
        <Link href="/">
          <a>Git</a>
        </Link>
        <Link href="/">
          <a>JS</a>
        </Link>
        <Link href="/">
          <a>Blog</a>
        </Link>
      </span>
    </div>
  )
}

export default Nav;
