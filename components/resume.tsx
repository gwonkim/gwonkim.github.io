import React from "react";
import { GITHUB_URL, EMAIL, NAME, NAME_E } from "../lib/constants";
import Style from "../styles/pin.module.scss";

const Resume = () => {
  const lineBar = (title: string) => (
    <>
      <hr className={Style.line} />
      <h2>#&nbsp;{title}</h2>
    </>
  );

  return (
    <>
      <table>
        <tr>
          <th>이름</th>
          <td>{NAME}</td>
          <th>영문</th>
          <td>{NAME_E}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td colSpan={3}>{EMAIL}</td>
        </tr>
        <tr>
          <th>깃허브</th>
          <td colSpan={3}>
            <a target="_blank" rel="noreferrer" href={GITHUB_URL}>
              gwonkim
            </a>
          </td>
        </tr>
      </table>

      {lineBar("학력사항")}
      <table>
        <th>재학기간</th>
        <th colSpan={2}>학교명 및 전공</th>
        <th>학점</th>
        <th>구분</th>
        <tr>
          <td>2019.03 ~ </td>
          <td>성공회대학교</td>
          <td>복수전공, 소프트웨어공학+디지털콘텐츠 전공</td>
          <td>4.26/4.5</td>
          <td>졸업 예정(23.02)</td>
        </tr>
        <tr>
          <td>2016.03 ~ 2019.02</td>
          <td colSpan={2}>홍주고등학교</td>
          <td></td>
          <td></td>
        </tr>
      </table>

      {lineBar("자격/면허증")}
      <table>
        <th>취득일</th>
        <th>종류</th>
        <th>등급</th>
        <th>발행처</th>
        <tr>
          <td>2022.7.15</td>
          <td>자동차 운전 면허증</td>
          <td>2종 보통</td>
          <td>충청남도경찰청장</td>
        </tr>
        <tr>
          <td>2022.9.1</td>
          <td>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.credly.com/badges/bab26fad-dc3d-4c48-96d7-f2fffce31f68/public_url"
            >
              <img className={Style.badge} src="/assets/pin/practitioner.png" />
              AWS Certified Cloud Practitioner
            </a>
          </td>
          <td></td>
          <td>AWS</td>
        </tr>
      </table>

      {lineBar("대외활동 및 교육 이수")}
      <table>
        <th>기간</th>
        <th>명칭</th>
        <th>상세</th>
        <th>기관</th>
        <th>기타</th>
        <tr>
          <td rowSpan={2}>2019.03 ~ 2020.12</td>
          <td rowSpan={2}>대학알리</td>
          <td rowSpan={2}>대학알리의 회대알리 소속 기자로 활동.</td>
          <td rowSpan={2}>대학알리</td>
          <td>
            <a href="https://univalli.com" target="_blank" rel="noreferrer">대학알리 홈페이지</a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://www.instagram.com/skhualli" target="_blank" rel="noreferrer">회대알리 인스타그램</a>
          </td>
        </tr>
        <tr>
          <td rowSpan={2}>2022.7.5 ~ 2022.8.30</td>
          <td rowSpan={2}>2022 AWS Cloud Bootcamp</td>
          <td>
            <p style={{'margin': '0px'}}>2022.7.5 ~ 2022.7.29</p>
            <p style={{'margin': '0px'}}>AWS Academy Cloud Foundations</p>
          </td>
          <td rowSpan={2}>AWS</td>
          <td rowSpan={2}></td>
        </tr>
        <tr>
          <td>
            <p style={{'margin': '0px'}}>2022.8.1 ~ 2022.8.30</p>
            <p style={{'margin': '0px'}}>AWS Academy Cloud Architecting</p>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Resume;
