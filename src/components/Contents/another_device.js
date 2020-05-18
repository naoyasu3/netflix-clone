import React from "react";
import styled from "styled-components";

const AnotherDevise = ({ image, video }) => {
  return (
    <div>
      <div className="our-story-card-animation-container">
        <DeviceImg src={image} />
        <div className="animation-card">
          <DeviceVideo>
            <source src={video} type="video/mp4" />
          </DeviceVideo>
        </div>
      </div>
    </div>
  );
};

export default AnotherDevise;

const DeviceImg = styled.img`
  position: relative;
  z-index: 2;
  max-width: 100%;
  height: auto;
  border: 0;
`;

const DeviceVideo = styled.video`
  width: 100%;
  height: 100%;
`;
