import React from "react";
import App from "next/app";
import Head from "next/head";
import PropTypes from "prop-types";
import 'antd/dist/antd.css'
import "../styles/global.scss";

const Gwonkim = ({ Component, props }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Hello I'm Jiwon</title>
      {/* <htmlAttributes lang="ko" /> */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover"
      />
      <meta name="description" content="jiwon의 gitblog" />
      <meta name="og:title" content="gwonkim" />
      <link href="https://fonts.googleapis.com/css?family=Black+Han+Sans:400,700,800" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400,700,800" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Anton:400,700,800" rel="stylesheet"></link>
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
