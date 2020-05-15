import React, { Component } from "react";
import styled from "styled-components";
import Img from "../img/tv.png";

class ContentOne extends Component {
  render(props) {
    return (
      <ContentContainer className="main-content">
        <div className="animation-card-container">
          <div className="our-story-card-text">
            <h1>大画面で楽しめる</h1>
            <h2>
              スマートテレビやApple TVはもちろん、
              <br />
              PlaystationやXboxなどのゲーム機、
              <br />
              Chromecastなどのストリーミングデバイス、
              <br />
              ブルーレイプレイヤーを使えば、お持ちの
              <br />
              テレビで簡単に観られます。
            </h2>
          </div>
          <div className="our-story-card-animation-container">
            <TvImg src={Img} />
            <div className="animation-card">
              <TvVideo>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-jp.m4v"
                  type="video/mp4"
                />
              </TvVideo>
            </div>
          </div>
        </div>
      </ContentContainer>
    );
  }
}

export default ContentOne;

const ContentContainer = styled.div`
  background: var(--main-deep-dark);
  border-bottom: 8px solid #222;

  img {
    max-width: 100%;
  }

  .animation-card-container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }

  .our-story-card-text {
    width: 52%;
    height: 100%;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    padding: 0 3rem 0 0;
    z-index: 3;
  }

  .our-story-card-animation-container {
    width: 45%;
    height: 100%;
    display: flex;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    box-sizing: border-box;
    margin: -10% -5% -5% 0;
    position: relative;
    overflow: hidden;
}

  .animation-card {
    width: 100%;
    height: 100%;
    max-width: 73%;
    max-height: 54%;
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  }
`;

const TvImg = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border: 0;
`;

const TvVideo = styled.video`
  width: 100%;
  height: 100%;
`;
