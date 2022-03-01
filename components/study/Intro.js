import React from 'react';
import introStyles from '../../css/intro.module.css';
import tooltipStyles from '../../css/tooltip.module.css';

const Intro = () => {
    return (
      <div className={introStyles.explanation}>
        <h1>Hello!👋</h1>
        <h2>✨공부 저장소✨</h2>
        <div className={tooltipStyles.tooltip}>
          이곳은&nbsp;
          <a target="_blank" rel="noreferrer" href="https://github.com/gwonkim">
            gwonkim(jiwon Kim)
          </a>
          &nbsp;
          <span className={tooltipStyles.tooltipText}>
            클릭 시 깃헙을 확인할 수 있습니다.&nbsp;
          </span>
          이 공부한 내용을 정리한 페이지입니다.
        </div>
      </div>
    );
};

export default Intro;
