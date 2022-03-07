import React, { useState, useEffect } from "react";
import useTabs from "../hooks/useTabs";
import tabStyle from "../css/tab.module.css";

const Tab = contents => {
  const contentData = contents.contents;
  const { contentItem, onChangeContents } = useTabs(0, contentData);


  const onMouseWheel = (e) => {
    console.log('onWheel: scrolling the list...');
    let deltaY = e.deltaY;
    let deltaX = e.deltaX;


    console.log('wheelDelta', wheelDelta);
    switch (e.deltaY > 0) {
      case true:
        console.log('positive');
        break;
      default:
        console.log('negative');
    }

    if (deltaY > 0) {
      console.log('위');
      e.scrollLeft(-deltaY + e.deltaX);
    } else {
      console.log('아래');
      e.deltax(-deltaY + e.deltaX);
    }
  }

  const [scroll, setScroll] = useState(0)

  const onMouseWheel2 = () => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
    <div /* className={tabStyle.tab} */>
      <div className={tabStyle.view}>
        <div className={tabStyle.tabButtons} onWheel={onMouseWheel2}>
          {contentData.map((v, i) => (
            <div
              className={tabStyle.tabButton}
              onClick={() => onChangeContents(i)}
            >
              {v.tab}
            </div>
          ))}
        </div>
      </div>
      <div className={tabStyle.tabContent}>{contentItem.content}</div>

      <br />
      <br />
      <br />
      <br />
      <br />
{/* 
      <div className={tabStyle.view}>
        <div className={tabStyle.scrollBlind}>
          <ul className={tabStyle.iul}>
            <li className={tabStyle.ili}>menu1</li>
            <li className={tabStyle.ili}>menu2</li>
            <li className={tabStyle.ili}>menu3</li>
            <li className={tabStyle.ili}>menu4</li>
            <li className={tabStyle.ili}>menu5</li>
            <li className={tabStyle.ili}>menu6</li>
            <li className={tabStyle.ili}>menu7</li>
            <li className={tabStyle.ili}>menu8</li>
            <li className={tabStyle.ili}>menu9</li>
            <li className={tabStyle.ili}>menu10</li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default Tab;
