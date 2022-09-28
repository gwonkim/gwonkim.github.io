import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <h1 className="header">
      <Link href="/">
        <a className="main">JW</a>
      </Link>
    </h1>
  )
}

export default Header;
