import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Gwonkim = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Gwonkim</title>
      <htmlAttributes lang="ko" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover" />
      <meta name="description" content="김지원의 깃블로그입니다." />
      <meta name="og:title" content="jiwon의 gitblog" />
      <meta name="og:description" content="성공회대학교 통합 커뮤니티 서비스" />
    </Head>
    <Component />
  </>
);

Gwonkim.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Gwonkim;
