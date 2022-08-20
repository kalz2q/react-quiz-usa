import React, { useState } from "react";
import "./App.css";

const App = () => {
  const quizNum = Math.floor(Math.random() * questions.length);
  const [currentQuestion, setCurrentQuestion] = useState(quizNum);

  return (
    <>
      <div className="App">{questions[currentQuestion].questionText}</div>;
      <div className="App">{questions[currentQuestion].answer}</div>;
    </>
  );
};

export default App;

const questions = [
  {
    questionText: "アメリカの州の数",
    answer: "50州",
  },
  {
    questionText: "太平洋にある州",
    answer: "ハワイ州",
  },
  {
    questionText: "ケンタッキー州とバージニア州の間に乗っかった形の州",
    answer: "ウエスト・バージニア州",
  },
  {
    questionText: "左に棒が突き出た形の州",
    answer: "オクラホマ州",
  },
  {
    questionText: "アメリカで一番大きな州",
    answer: "テキサス州",
  },
  {
    questionText: "カリフォルニア州の東南の州",
    answer: "アリゾナ州",
  },
  {
    questionText: "アで始まる州はアラバマ州と",
    answer: "アリゾナ州",
  },
  {
    questionText: "ポテトで有名な",
    answer: "アイダホ州",
  },
  {
    questionText:
      "カナダに面している州で西海岸からスペリオル湖まではワシントン州、アイダホ州、モンタナ州、ノース・ダコタ州と",
    answer: "ミネソタ州",
  },
  {
    questionText:
      "イリノイ州とインディアナ州とオハイオ州の南のフライドチキンの",
    answer: "ケンタッキー州",
  },
  {
    questionText: "イリノイ州とオハイオ州のあいだの自動車レースで有名な",
    answer: "インディアナ州",
  },
  {
    questionText: "ウィスコンシン州の南は",
    answer: "イリノイ州",
  },
  {
    questionText: "デトロイトは何州",
    answer: "ミシガン州",
  },
  {
    questionText: "ミシガン州の南はインディアナ州と",
    answer: "オハイオ州",
  },
  {
    questionText: "オハイオ州とインディアナ州の南は",
    answer: "ケンタッキー州",
  },
  {
    questionText:
      "ニュージャージー州の北と東がニューヨーク州。西がペンシルバニア州。南は",
    answer: "デラウエア州",
  },
  {
    questionText: "メリーランドの東",
    answer: "デラウエア州",
  },
  {
    questionText:
      "ワシントンDCはバージニア州とウエスト・ヴァージニア州とこの州の間",
    answer: "メリーランド州",
  },
  {
    questionText: "ケンタッキー州の南",
    answer: "テネシー州",
  },
  {
    questionText: "バージニア州の南",
    answer: "ノースカロライナ州",
  },
  {
    questionText: "ボストンのある州",
    answer: "マサチューセッツ州",
  },
  {
    questionText: "バーモント州とメイン州のあいだの州",
    answer: "ニューハンプシャー州",
  },
  {
    questionText: "コネチカット州の東の小さな州",
    answer: "ロードアイランド州",
  },
  {
    questionText:
      "アイオワ州の南、イリノイ州の西、カンザス州の東、アーカンソー州の北",
    answer: "ミズーリ州",
  },
  {
    questionText: "テキサス州の東、ミシシッピー州の西",
    answer: "ルイジアナ州",
  },
  {
    questionText: "ミネソタ州の東隣りは",
    answer: "ウィスコンシン州",
  },
  {
    questionText: "モンタナ州の南のほぼ長方形の州",
    answer: "ワイオミング州",
  },
  {
    questionText: "ワイオミング州の南のほぼ長方形の州",
    answer: "コロラド州",
  },
  {
    questionText: "ノース・ダコタ州とサウスダコタ州の南の州",
    answer: "ネブラスカ州",
  },
  {
    questionText: "オクラホマ州の北の州",
    answer: "カンザス州",
  },
  {
    questionText: "ルイジアナ州の北の州",
    answer: "アーカンソー州",
  },
  {
    questionText: "アラバマ州の西はミシシッピー州。東は",
    answer: "ジョージア州",
  },
  {
    questionText: "フロリダ州の北はジョージア州と",
    answer: "アラバマ州",
  },
  {
    questionText: "スペリオル湖とヒューロン湖に接している州",
    answer: "ウィスコンシン州",
  },
  {
    questionText: "ロードアイランド州の西側の州",
    answer: "コネチカット州",
  },
  {
    questionText: "ニューヨーク州の東側はバーモント州、マサチューセッツ州と",
    answer: "コネチカット州",
  },
  {
    questionText: "ワシントンDCはメリーランド州と何州にはさまれている",
    answer: "バージニア州",
  },
  {
    questionText: "ロシアから買った州",
    answer: "アラスカ州",
  },
  {
    questionText: "西海岸の南端の州",
    answer: "カリフォルニア州",
  },
  {
    questionText: "オンタリオ湖に接している東海岸の州",
    answer: "ニューヨーク州",
  },
  {
    questionText:
      "五大湖はスペリオル、ヒューロン、ミシガン、エリー、オンタリオ湖。この内州名になっているのは。",
    answer: "ミシガン州",
  },
  {
    questionText: "西海岸の北端の州",
    answer: "ワシントン州",
  },
  {
    questionText: "西海岸のワシントン州とカリフォルニア州に挟まれた州",
    answer: "オレゴン州",
  },
  {
    questionText:
      "カリフォルニアの横にある州。南にアリゾナ州。東にユタ州。北にオレゴン州とアイダホ州。ニホンノミカタ。",
    answer: "ネバダ州",
  },
  {
    questionText:
      "東をコロラド州、西をネバダ州に挟まれ、北にアイダホ州とワイオミング州、南にアリゾナ州がある州。モルモン教で有名。角欠け長方形。",
    answer: "ユタ州",
  },
  {
    questionText:
      "東をカンザス州と、西をユタ州に挟まれ、北にワイオミング州とネブラスカ州、南にニューメキシコ州とオクラホマ州がある州。ほぼ長方形。",
    answer: "コロラド州",
  },
  {
    questionText: "カリフォルニアの右下の州",
    answer: "アリゾナ州",
  },
  {
    questionText: "アリゾナ州とテキサス州の間の州",
    answer: "ニューメキシコ州",
  },
  {
    questionText: "アメリカ最大の州",
    answer: "テキサス州",
  },
  {
    questionText:
      "メキシコに接しているのは、カリフォルニア州、ニューメキシコ州、テキサス州と",
    answer: "アリゾナ州",
  },
  {
    questionText: "ワシントンやオレゴンの横で形が芋のポテトで有名な州",
    answer: "アイダホ州",
  },
  {
    questionText: "アイダホ州の東の大きな州",
    answer: "モンタナ州",
  },
  {
    questionText: "モンタナ州の南のほぼ長方形の州。コロラド州の北",
    answer: "ワイオミング州",
  },
  {
    questionText: "左の羽がオクラホマ州、右の羽がテネシー州の州",
    answer: "アーカンソー州",
  },
  {
    questionText:
      "サウス・ダコタ州の南、ワイオミング州の東、アイオワ州の西、カンサス州の北の州",
    answer: "ネブラスカ州",
  },
  {
    questionText:
      "アイで始まる州は西から、アイダホ州、アイオワ州、イリノイ州、と",
    answer: "インディアナ州",
  },
  {
    questionText:
      "シカゴのある州、北がウィスコンシン州、南はミズーリ州とケンタッキー州",
    answer: "イリノイ州",
  },
  {
    questionText:
      "南にアイオワ州、東にウィスコンシン州、西はノースダコタ州とサウスダコタ州",
    answer: "ミネソタ州",
  },
  {
    questionText: "アイオワ州の南",
    answer: "ミズーリ州",
  },
  {
    questionText:
      "ニューオリンズのある州で、周辺はテキサス州、アーカンソー州、ミシシッピー州",
    answer: "ルイジアナ州",
  },
  {
    questionText: "この州の南はミシシッピー州とアラバマ州とジョージア州",
    answer: "テネシー州",
  },
  {
    questionText: "フロリダ州の北はアラバマ州と",
    answer: "ジョージア州",
  },
];
