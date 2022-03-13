import React from "react";
import useTabs from "../hooks/useTabs";
import tabStyle from "../css/tab.module.css";
import Contents from "./Contents/Contents";

const Tab = (contents) => {
  const contentData = contents.contents;
  const { contentItem, onChangeContents } = useTabs(0, contentData);

  return (
    <div className={tabStyle.tab}>
      <div className={tabStyle.tabButtons}>
        {contentData.map((v, i) => (
          <div
            className={tabStyle.tabButton}
            onClick={() => onChangeContents(i)}
          >
            <div className={tabStyle.square}></div>
            {v.tab}
          </div>
        ))}
      </div>
      <div className={tabStyle.tabContent}>
        <Contents />
      </div>
    </div>
  );
};

export default Tab;
