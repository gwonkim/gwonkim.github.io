import React from "react";
import Style from "./colorBlock.module.scss";
import Explain from './explain';
import Block from './block';

const ColorBlock = () => {
    const color = ["red", "blue", "yellow", "green", "purple"]; // 블록 색상
    let size; // 크기
    let blockColor = []; // 블록 색상
    let checkedBlock = []; // 선택한 블록
    let answerColor; // 정답 색상



     // 재시작
     const onRestart = () => {
        location.reload();
    }


    // 문제
    const question = () => {
        const text = document.querySelector('.text');
        answerColor = color[Math.floor(Math.random() * (5 + 1))]; // 정답 색깔
        text.innerText = `${answerColor}를 선택해주세요.`;
    };

 

    // 정답 확인
    const checkAnswer = (id) => {
        if (blockColor[id[id.length - 2]][id[id.length - 1]] !== answerColor) {
            alert('틀렸습니다!');
            onRestart();
        } else { // 정답 체크
            checkedBlock[id[id.length - 2]][id[id.length - 1]] = true;
        }
    };

    // 제출하기
    const submit = () => {
        for (let r = 0; r < size; r++) {
            for (let c = 0; c < size; c++) {
                if (blockColor[r][c] === answerColor && !checkedBlock[r][c]) {
                    alert('정답이 아닙니다.');
                    return onRestart();
                }
            }
        }
        alert('정답입니다.');
        return onRestart();
    };


   
    return (
        <div className={Style.index}>

            <h1>Mini Games</h1>
            <h2>color block</h2>
            
            <Block blockColor={blockColor} checkedBlock={checkedBlock} color={color} />
            
            <Explain />

        </div>
    );
};
