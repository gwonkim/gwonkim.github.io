import React from 'react';
import AppLayout from '../components/AppLayout';
import Intro from '../components/study/Intro';
import indexStyles from '../css/index.module.css';

const study = () => {
    return (
      <div className={indexStyles.index}>
          <Nav />
          <Intro />
      </div>
    );
};

export default study;