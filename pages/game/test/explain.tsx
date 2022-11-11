import React, { useState, useEffect } from "react";
import Style from "./colorBlock.module.scss";

const Explain = () => {
    const [ box, setBox ] = useState<string>("explainBox");
    useEffect(() => {
        box === "explainBox" ? setBox("nonExplainBox") : setBox("explainBox");
    }, []);

    return (
        <div>
            <p className={Style.explain}>게임 방법</p>
            <div className={box}>
                <h3>colorBlock 게임이란?</h3>
                <p>잠깐 보여진 블록판을 기억해서 랜덤으로 뽑힌 색상의 칸을 전부 누르면 성공!</p>
                <h3>- 순서 -</h3>
                <p>1. 시작하기 버튼을 누르면 격자모양의 블록판 하나가 잠깐 보였다가 사라진다.</p>
                <p>2. 사라진 순간 'oo색을 선택해주세요.'라는 문구가 나온다.(색상은 랜덤.)</p>
                <p>3. 해당 색상을 올바르게 선택했다면 성공</p>
                <h3>- 블록판이 보여지는 시간 -</h3>
                <p>3X3 : 약 1초</p>
                <p>5X5 : 약 2초</p>
                <p>7X7 : 약 3초</p>
            </div>
        </div>
    );
};


export default  Explain;

