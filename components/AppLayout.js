import React from "react";
import propTypes from "prop-types";
import Nav from "./Nav";
import layoutStyle from '../css/appLayout.module.css'
// import Menu from "./Menu";
// import Contents from "./Contents/Contents";

const AppLayout = ({ children }) => {
  return (
    <div className={layoutStyle.appLayout}>
      <Nav className={layoutStyle.nav} />
      <div className={layoutStyle.contents}>
        <div className={layoutStyle.tab}>{children}</div>
      </div>
    </div>
  );
};

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default AppLayout;
