import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

// class MyDocument extends Document {
  export default class MyDocument extends Document {
    render() {
      return (
        <Html lang="ko">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
}