import React from "react";
import propTypes from "prop-types";
import Nav from "./Nav";
import Tab from "./tab";
import { contents } from "./dummy";

const AppLayout = ({ children }) => {
  console.log('App', contents);
  return (
    <>
      <div>
        <Nav />
        <Tab contents={contents} />
        {children}
      </div>
    </>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
