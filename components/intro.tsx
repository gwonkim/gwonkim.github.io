import React from "react";
import { GITHUB_URL } from "../lib/constants";

const Intro = () => {
  return (
    <section>
      <h1>G1 Blog.</h1>
      <h4>
        자기소개 구간 및 블로그 소개 <a href={GITHUB_URL}>JIWON'S GITHUB</a>
      </h4>
    </section>
  );
};

export default Intro;
