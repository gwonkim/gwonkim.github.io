import React, { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./nav";
import Meta from "./meta";
import { Tag } from "antd";

type Props = {
  children: React.ReactNode
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
