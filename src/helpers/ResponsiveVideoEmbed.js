/* A simple iframe wrapper that makes 16:9 responsive embed */
import React from "react";

export default ({ url, background = "black", className = "video" }) => {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        background: background,
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        title="Embeded Video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src="https://www.youtube.com/embed/anmCSICgs8M"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        frameborder="0"
      />
    </div>
  );
};
