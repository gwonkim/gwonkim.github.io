import React from "react";
import propTypes from "prop-types";
import Nav from "./Nav";

const AppLayout = ({ children }) => {
  return (
    <>
      <div>
      <Nav />
          {children}
        </div>
    </>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
