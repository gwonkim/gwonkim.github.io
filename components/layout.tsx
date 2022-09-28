import React from "react";
import Alert from "./alert";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Alert />
      <Meta />
      <div>
        {/* <Header /> */}
        <main className="container">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
