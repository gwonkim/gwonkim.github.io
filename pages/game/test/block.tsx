import React from "react";
import Style from "./colorBlock.module.scss";
import Explain from './explain';

type Props = {
    size: number, 
    blockColor: string[][], 
    checkedBlock: boolean[][],
    color: string[],
  };

const Block = ({size, blockColor, checkedBlock, color}: Props) => {
    // 블록 생성

    const start = (num, time) => {
        size = num;
        createBlockBoard();
        createButton();
        showBlock(time);
        setTimeout(question, 500 + time);
    };


    const createBlockBoard = () => {
        const game = document.querySelector(".game");
        const blockBoard = document.createElement("div");
        blockBoard.className = 'blockBoard';

        for (let r = 0; r < size; r++) {
            blockColor[r] = [];
            checkedBlock[r] = [];
            let rowBlock = document.createElement("div"); // RowBlock
            rowBlock.className = "rowBlock";

            for (let c = 0; c < size; c++) {
                let newBlock = document.createElement('div');
                let num = Math.floor(Math.random() * (5 + 1)); // 색상 랜덤 지정
                newBlock.className = `block`;
                newBlock.id = `block${r}${c}`;
                newBlock.addEventListener('click', onClickBlock);
                newBlock.style.background = color[num];
                blockColor[r][c] = color[num]; // 색상 저장
                checkedBlock[r][c] = false; // check 초기화

                rowBlock.appendChild(newBlock);
            }
            blockBoard.appendChild(rowBlock);
        }
        game.appendChild(blockBoard);
    };


    // 블록 보이기
    let showBlock = (time) => {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let block = document.querySelector(`#block${i}${j}`);
                setTimeout(() => {
                    for (let j = 0; j < size; j++) {
                        block.classList.remove('block');
                        block.classList.add('nonblock');
                        block.style.background = '#fff'
                    }
                }, time);
            }
            clearTimeout(0);
        }
    };
       // 블록 클릭
       const onClickBlock = (e) => {
        let id = e.target.id;
        checkAnswer(id);
        let classN = e.target.classList[0];
        let block = document.querySelector(`#${id}`);

        // class change
        if (classN === 'nonblock') {
            block.classList.remove('nonblock');
            block.classList.add('block');
            block.style.background = `${blockColor[id[id.length - 2]][id[id.length - 1]]}`;
        } else if (classN === 'block') {
            block.classList.remove('block');
            block.classList.add('nonblock');
            block.style.background = '#fff';
        }
    };

    return (
        <div className={Style.index}>
            <div className={Style.game}>
                <h2 className={Style.text}></h2>
            </div>

        </div>
    );
};

export default Block;
