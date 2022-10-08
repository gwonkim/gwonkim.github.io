import React from "react";
import { useEffect, useCallback, } from "react";
import { GITHUB_URL } from "../lib/constants";

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
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <h1 className="typing">안녕하세요 김지원입니다.</h1>
      <div className="text">
        <h3>완성하는 프론트엔드 웹 개발자 김지원입니다.</h3>
        <h4>
          자기소개 구간 및 블로그 소개 <a href={GITHUB_URL}>JIWON'S GITHUB</a>
        </h4>
      </div>
    </>
  );
};

export default Intro;
