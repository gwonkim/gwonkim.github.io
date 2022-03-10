import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../css/global.css';

const Gwonkim = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Gwonkim</title>
      <htmlAttributes lang="ko" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
      />
      <meta name="description" content="김지원의 깃블로그입니다." />
      <meta name="og:title" content="jiwon의 gitblog" />
    </Head>
    <Component />
  </>
);

Gwonkim.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Gwonkim;
