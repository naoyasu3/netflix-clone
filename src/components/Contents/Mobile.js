import React from "react";
import styled from "styled-components";

const Mobile = ({ image, video }) => {
  return (
    <div>
      <div className="our-story-card-animation-container">
        <MobileImg src={image} />
        <div className="animation-card">
          <MobileVideo>
            <source src={video} type="video/mp4" />
          </MobileVideo>
        </div>
      </div>
    </div>
  );
};

export default Mobile;

const MobileImg = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border: 0;
`;

const MobileVideo = styled.video`
  width: 100%;
  height: 100%;
`;
