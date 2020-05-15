import React from "react";
import Content from "./Content";

const contents = (props) =>
  props.contents.map((content, index) => {
    return (
      <Content
        headline={content.headline}
        subHeadline={content.subHeadline}
        image={content.image}
        video={content.video}
        key={content.key}
        number={content.number}
        flipped={content.flipped}
      />
    );
  });

export default contents;
