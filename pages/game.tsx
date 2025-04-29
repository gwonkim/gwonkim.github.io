import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Footer from "../components/footer";
import Style from "../styles/pin.module.scss";

interface Photo {
  src: string;
  year: number;
  list: number[];
  text: string;
}

const photos: Photo[] = [
  { src: "/game/1.jpeg", year: 2024, list: [2022, 2023, 2024], text: "행복한 미소와 함께 V쌍븨이V를 한 연도는 언제일까요?" }, // 2024.9.15
  { src: "/game/2.jpeg", year: 2024, list: [2022, 2021, 2023, 2024], text: "장하랑은 평화롭게 영상을 시청하고 있습니다.몇 연도 장하랑일까요?" }, // 2024.7.28
  { src: "/game/3.jpeg", year: 2023, list: [2022, 2021, 2023, 2024], text: "열심히 무언가를 찍고 있습니다. 이것은 언제일까요?" }, // 2023.10.29
  { src: "/game/4.jpeg", year: 2023, list: [2022, 2021, 2023, 2020], text: "장하랑이 앞머리를 잘랐다면서 븨이V 사진을 보냈습니다.이건 언제일까요?" }, // 2023.10.3
  { src: "/game/5.jpeg", year: 2023, list: [2022, 2021, 2023, 2024], text: "한가롭게 커피를 먹고 있는 장하랑은 몇년도일까요?" }, // 2023.8.13
  { src: "/game/6.jpeg", year: 2023, list: [2022, 2021, 2023, 2020], text: "어느 날 장하랑이 눈물을 흘렸다면서 김지원에게 사진을 보냈습니다. 사진을 보낸 연도는 언제일까요?" }, // 2023.2.13
  { src: "/game/7.jpeg", year: 2022, list: [2022, 2021], text: "한 가게에서 음식 사진을 찍은 장하랑은 인스타에 스토리를 올리고 있습니다. 언제일까요?" }, // 2022.10.11
  { src: "/game/8.jpeg", year: 2021, list: [2019, 2021, 2020], text: "한가로운 어느 날입니다. 이때는 언제일까요?" }, // 2021.8.6
  { src: "/game/9.jpeg", year: 2017, list: [2016, 2018, 2017], text: "튼실하고 풍성한 모발을 자랑하고 있습니다. 언제일까요?" }, // 2017.10.28
  { src: "/game/10.jpeg", year: 2018, list: [2016, 2018, 2017], text: "한 여름, 장하랑은 풍선 인형 옆에서 V븨이를 하고 있네요. 언제일까요?" }, // 2018.8.9
  { src: "/game/11.jpeg", year: 2018, list: [2016, 2018, 2017, 2019], text: "역동적으로 게임을 하고 있습니다. 언제일까요?" }, // 2018.12.17
  { src: "/game/12.jpeg", year: 2018, list: [2016, 2018, 2017], text: "사람은 곡선으로 이루어져 있습니다. 곡선미를 자랑하는 장하랑은 몇년도 장하랑일까요?" }, // 2018.12.19
  { src: "/game/13.jpeg", year: 2020, list: [2022, 2021, 2019, 2020], text: "평화롭게 침대에 누워 폰을 보고 있네요. 침대에 누워있는 장하랑은 몇 년도일까요?" }, // 2020.2.19
  { src: "/game/14.jpeg", year: 2021, list: [2022, 2021, 2019, 2020], text: "오늘도 언제나 부족한 눈썹을 채우고 있는 장하랑! 기분이 좋은지 브이V를 하고 있네요~ 이때는 언제일까요?" }, // 2021.6.24
  { src: "/game/15.jpeg", year: 2021, list: [2019, 2021, 2020], text: "한적한 카페에서 마스크를 쓰고 있는 장하랑은 몇 년도일까요?" }, // 2021.8.26
  { src: "/game/16.jpeg", year: 2021, list: [2022, 2021, 2023, 2020], text: "해맑게 OK를 하고 있는 장하랑은 언제쯤일까요?" }, // 2021.8.30
  { src: "/game/17.jpeg", year: 2021, list: [2022, 2021, 2023, 2020], text: "침대에 누운 장하랑은 깊은 감명을 받았는지 고뇌에 빠져있습니다. 언제일까요?" }, // 2021.12.23
  { src: "/game/18.jpeg", year: 2022, list: [2022, 2021, 2023], text: "열심히 필름을 붙이고 있는 장하랑은 언제일까요?" }, // 2022.1.22
  { src: "/game/19.jpeg", year: 2022, list: [2022, 2021, 2019, 2020], text: "오늘 착장이 마음에 들었는지 거울 셀카를 찍네요. 언제일까요?" }, // 2022.5.14
  { src: "/game/20.jpeg", year: 2022, list: [2022, 2021, 2023, 2020], text: "카페에서 무언가 집중하고 있습니다. 이때는 언제일까요?" }, // 2022.5.15
  { src: "/game/21.jpeg", year: 2022, list: [2022, 2023, 2024], text: "인스타에 사진을 올린다고 김지원이 도촬하는지도 모릅니다. 이때는 언제일까요?" }, // 2022.8.22
];

const shuffle = (arr: Photo[]) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

const Test = () => {
  const [current, setCurrent] = useState(0);
  const [stage, setStage] = useState(1);
  const [shuffled, setShuffled] = useState<Photo[]>([]);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    setShuffled(shuffle(photos));
  }, []);

  const handleSelect = (selectedYear: number) => {
    const correctYear = shuffled[current].year;

    if (selectedYear === correctYear) {
      setResult("correct");
      setTimeout(() => nextStage(), 1200);
    } else {
      setResult("wrong");
      setTimeout(() => {
        setShuffled(shuffle(photos));
        setCurrent(0);
        setStage(1);
        setResult("");
      }, 1200);
    }
  };

  const nextStage = () => {
    if (current + 1 >= shuffled.length) {
      alert("게임이 끝났어요! 다시 시작합니다.");
      setShuffled(shuffle(photos));
      setCurrent(0);
      setStage(1);
      setResult("");
    } else {
      setCurrent(current + 1);
      setStage(stage + 1);
      setResult("");
    }
  };

  if (shuffled.length === 0) return null;

  return (
    <Layout>
      <Head>
        <title>사진 연도 맞추기 게임</title>
      </Head>
      <section className={Style.container}>
        <h2 style={{ color: "#fff", marginBottom: "1rem" }}>{stage}/{photos.length}단계</h2>
        <img src={shuffled[current].src} alt="사진" style={{ width: "250px", height: "auto" }} />
        <p style={{ color: "#fff", fontWeight: "bold", margin: "1rem 0" }}>{shuffled[current].text}</p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
          {shuffled[current].list.map((year, idx) => (
            <button key={idx} onClick={() => handleSelect(year)} style={{ padding: "10px 20px", fontSize: "16px" }}>
              {year}
            </button>
          ))}
        </div>
        {result === "correct" && (
          <div style={{ color: "green", fontWeight: "bold", marginTop: "1rem" }}>정답!</div>
        )}
        {result === "wrong" && (
          <div style={{ color: "red", fontWeight: "bold", marginTop: "1rem" }}>땡! 다시 시작!</div>
        )}
      </section>
      <Footer />
    </Layout>
  );
};

export default Test;
