import React from 'react';
import AppLayout from '../components/AppLayout';
import Tab from "../components/tab";
import { contents } from "../components/dummy";

const Home = () => {
    return (
      <AppLayout>
        <Tab contents={contents} />
      </AppLayout>
    );
};

export default Home;
