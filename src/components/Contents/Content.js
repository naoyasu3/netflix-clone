import React from "react";
import styled from "styled-components";

const content = (props) => {
  let watchOnTv = null;
  let mobile = null;
  if (props.number === 1) {
    watchOnTv = (
      <div className="our-story-card-animation-container">
        <TvImg src={props.image} />
        <div className="animation-card">
          <TvVideo>
            <source src={props.video} type="video/mp4" />
          </TvVideo>
        </div>
      </div>
    );
  }

  if (props.number === 2) {
    mobile = (
      <div>
        <div className="our-story-card-animation-container">
          <TvImg src={props.image} />
          <div className="animation-card">
            <TvVideo>
              <source src={props.video} type="video/mp4" />
            </TvVideo>
          </div>
        </div>
      </div>
    );
  }

  const flippedClassName = props.flipped
    ? "our-story-card-text-left"
    : "our-story-card-text-right";

  return (
    <ContentContainer className="main-content">
      <div className="animation-card-container">
        {mobile}
        <div className={flippedClassName}>
          <h1>{props.headline}</h1>
          <h2>{props.subHeadline}</h2>
        </div>
        {watchOnTv}
      </div>
    </ContentContainer>
  );
};

export default content;

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
  
  .our-story-card-text-right {
    width: 52%;
    height: 100%;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    padding: 0 3rem 0 0;
    z-index: 3;
  }

  .our-story-card-text-left {
    width: 52%;
    height: 100%;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    z-index: 3;
    padding: 0 0 0 3rem;
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
