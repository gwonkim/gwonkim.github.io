import React from 'react';
import Link from 'next/link';
import Head from "next/head";
import Style from '../styles/nav.module.scss';

const Nav = () => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans:400,700,800" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700,800" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Anton:400,700,800" rel="stylesheet"></link>
      </Head>
      <div className={Style.nav}>
        <span className={Style.left}>
          <Link href="/">
            <a>GWONKIM</a>
          </Link>
        </span>
        <span className={Style.right}>
          <Link href="/pin">
            <a>resume</a>
          </Link>
        </span>
      </div>
    </>
  )
}

export default Nav;
