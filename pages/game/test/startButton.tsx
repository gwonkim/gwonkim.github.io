import React from 'react';

const StartButton = (blockColor: [], checkedBlock: []) => {
 
    
    // 버튼 생성
    const createButton = () => {
        // 시작버튼 숨기기
        hiddenButton('start3');
        hiddenButton('start5');
        hiddenButton('start10');

        // 제출 및 다시시작 버튼 생성
        const game = document.querySelector(".game");
        let submitbutton = document.createElement('button');
        let restartbutton = document.createElement('button');

        submitbutton.className = `submit`;
        submitbutton.innerText = '제출'
        submitbutton.addEventListener('click', submit);
        restartbutton.className = `restart`;
        restartbutton.innerText = '다시시작'
        restartbutton.addEventListener('click', onRestart);
        game.appendChild(submitbutton);
        game.appendChild(restartbutton);
    }

    // 버튼 숨기기
    const hiddenButton = (value) => {
        let tag = document.querySelector(`.${value}`);
        tag.style.visibility = 'hidden';
    };

    // 버튼 보이기
    const showButton = (value) => {
        let tag = document.querySelector(`.${value}`);
        tag.style.visibility = 'visible';
    };


    return (
<>
<button type="button" className={Style.start3} onClick={() => start(3, 1000)}>3x3</button>
            <button type="button" className={Style.start5} onClick={() => start(5, 2000)}>5X5</button>
            <button type="button" className={Style.start10} onClick={() => start(7, 3000)}>7X7</button>

</>
    )
}