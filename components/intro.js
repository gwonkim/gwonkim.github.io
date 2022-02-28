import React from 'react';
import dropdownStyles from '../css/dropdown.module.css';
import navStyles from '../css/nav.module.css';

const Intro = () => {
    return (
      <div className={navStyles.explanation}>
        <h1>Hello!👋</h1>
        <h2>✨공부 저장소</h2>
        <p>javaScript, React, Git, etc...</p>
        <div className={dropdownStyles.tooltip} className={dropdownStyles.text}>
          이곳은
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gwonkim"
            // style="text-decoration: underline;"
          >
            gwonkim(jiwon Kim)
          </a>
          <span className={dropdownStyles.tooltipText}>
            클릭 시 깃헙을 확인할 수 있습니다.
          </span>
          이 공부한 내용을 정리한 페이지입니다.
        </div>
        <hr />
      </div>
    );
};

export default Intro;