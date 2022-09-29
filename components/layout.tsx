import React from "react";
import Footer from "./footer";
import Header from "./nav";
import Meta from "./meta";

type Props = {
  children: React.ReactNode
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div>
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
