import React from "react";
import { useEffect, useCallback, } from "react";
import { GITHUB_URL, EMAIL } from "../lib/constants";

const Intro = () => {
  const onScroll = useCallback(() => {
    const typing = document.querySelector('.typing') as HTMLElement | null;
    const text = document.querySelector('.text') as HTMLElement | null;
    const scrollY = window.pageYOffset;
    if (scrollY > 10) {
      typing.style.visibility = 'hidden';
    } else {
      typing.style.visibility = 'visible';
      text.style.paddingTop = '150px';
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <h1 className="typing">안녕하세요 김지원입니다.</h1>
      <div className="text">
        <h3>완성하는 프론트엔드 웹 개발자 김지원입니다.</h3>
        <ul>
          <li>
            github : <a target="_blank" rel="noreferrer" href={GITHUB_URL}>gwonkim</a>
          </li>
          <li>
            email : {EMAIL}
          </li>
        </ul>

        <h4>
        </h4>
      </div>
    </>
  );
};

export default Intro;
