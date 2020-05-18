import React from "react";
import styled from "styled-components";

const WatchOnTv = ({ image, video }) => {
  return (
    <div className="our-story-card-animation-container">
      <TvImg src={image} />
      <div className="animation-card">
        <TvVideo>
          <source src={video} type="video/mp4" />
        </TvVideo>
      </div>
    </div>
  );
};

export default WatchOnTv;

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
