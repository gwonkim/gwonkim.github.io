import { useState } from 'react';

const useTabs = (initialTabs, allTabs) => {
    const [ contentIndex, setContentIndex ] = useState(initialTabs);
    return {
        contentItem: allTabs[contentIndex], // 초기값 0번
        onChangeContents: setContentIndex
    };
};

export default useTabs;
