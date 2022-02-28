import React from 'react';
import AppLayout from '../components/AppLayout';
import Intro from '../components/intro';
import indexStyles from '../css/index.module.css';

const Home = () => {
    return(
        <div className={indexStyles.index}>
        <AppLayout>
            <Intro />
        </AppLayout>
        </div>
    );
}

export default Home;