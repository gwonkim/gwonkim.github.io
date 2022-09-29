import React from 'react';
import Style from '../styles/footer.module.scss';
import { GITHUB_URL, BLOG_REPOSITORY_URL } from '../lib/constants';

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <hr />
      <h3>Jiwon's Study Pages</h3>
      <p>
        COPYRIGHT 2021 jiwon Kim ALL RIGHTS RESERVED.&nbsp;&nbsp;&nbsp;
        <a target="_blank" rel="noreferrer" href={GITHUB_URL}>
          &lt;jiwon kim github 바로가기&gt;
        </a>
        &nbsp;&nbsp;&nbsp;
        <a target="_blank" rel="noreferrer" href={BLOG_REPOSITORY_URL}>
          &lt;블로그 개발 코드 확인하기&gt;
        </a>
      </p>
    </footer>
  )
};

export default Footer;
