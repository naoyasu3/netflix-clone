import React, { Component } from "react";
import Header from "../components/Header";
import Contents from "../components/Contents/Contents";
import Footer from "../components/Footer";

class Main extends Component {
  state = {
    contents: [
      {
        key: "watchOnTv",
        number: 1,
        animation: "",
        animationMessages: [],
        cardName: "watchOnTv",
        flipped: undefined,
        headline: "大画面で楽しめる",
        image:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
        imageVariant: undefined,
        subHeadline:
          "スマートテレビやApple TVはもちろん、PlaystationやXboxなどのゲーム機、Chromecastなどのストリーミングデバイス、ブルーレイプレイヤーを使えば、お持ちのテレビで簡単に観られます。",
        trackingPixel: <n />,
        video:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-jp.m4v",
      },

      {
        headline: "ダ﻿ウ﻿ン﻿ロ﻿ー﻿ド﻿し﻿てオ﻿フ﻿ラ﻿イ﻿ン﻿で視﻿聴",
        subHeadline:
          "お﻿気﻿に﻿入﻿り﻿の作﻿品﻿をダ﻿ウ﻿ン﻿ロ﻿ー﻿ドす﻿れ﻿ば﻿、い﻿つ﻿で﻿もお﻿楽﻿し﻿みい﻿た﻿だ﻿け﻿ま﻿す﻿。",
        number: 2,
        image:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
        video: "",
        animation:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png",
        animationMessages: [
          "ストレンジャー・シングス 未知の世界",
          "ダ﻿ウ﻿ン﻿ロ﻿ー﻿ド﻿中﻿...",
        ],
        imageRef: "ƒ imageRef() {}",
        trackingPixel: "<n />",
        handleTap: "ƒ bound f() {}",
        cardName: "downloadAndWatch",
        CTA: null,
        flipped: true,
      },
      {
        headline: "ど﻿こ﻿で﻿も観﻿ら﻿れ﻿る",
        number: 3,
        subHeadline:
          "ス﻿マ﻿ー﻿トフ﻿ォ﻿ン﻿やタ﻿ブ﻿レ﻿ッ﻿ト﻿、パ﻿ソ﻿コ﻿ン﻿やテ﻿レ﻿ビな﻿ど﻿、た﻿く﻿さ﻿ん﻿の機﻿器﻿でた﻿く﻿さ﻿ん﻿の映﻿画やTV﻿番﻿組﻿をお﻿楽﻿し﻿みく﻿だ﻿さ﻿い﻿。",
        image:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-jp.png",
        video:
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-jp.m4v",
        animation: "",
        animationMessages: [],
        imageRef: "ƒ imageRef() {}",
        trackingPixel: "<n />",
        handleTap: "ƒ bound f() {}",
        cardName: "watchOnDevice",
        CTA: null,
      },
    ],
    footer: [
      {
        text: "よくあるご質問",
        id: "",
      },
      {
        text: "ヘルプセンター",
        id: "",
      },
    ],
  };

  render() {
    let contents = <Contents contents={this.state.contents} />;
    return (
      <div>
        <Header />
        {contents}
        <Footer footer={this.state.footer} />
      </div>
    );
  }
}

export default Main;
