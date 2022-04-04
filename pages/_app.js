import React from "react";
import App from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import "../css/global.css";

const Gwonkim = ({ Component, props }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Hello I'm Jiwon</title>
      <htmlAttributes lang="ko" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
      />
      <meta name="description" content="김지원의 깃블로그입니다." />
      <meta name="og:title" content="jiwon의 gitblog" />
    </Head>
    <Component {...props} />
  </>
);

Gwonkim.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

Gwonkim.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps };
};

export default App;
