import React from 'react';
import useTabs from '../hooks/useTabs';
import tabStyle from '../css/tab.module.css';

const Tab = (contents) => {
  const contentData = contents.contents;
  const { contentItem, onChangeContents } = useTabs(0, contentData);
    return (
      <div className={tabStyle.tab}>
        {contentData.map((v, i) => (
          <div
            className={tabStyle.tabButton}
            onClick={() => onChangeContents(i)}
          >
            {v.tab}
          </div>
        ))}
        <div className={tabStyle.tabContent}>
          {contentItem.content}
        </div>
      </div>
    );
}

export default Tab;