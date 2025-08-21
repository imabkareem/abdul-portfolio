import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  const phrases = [
    "Full Stack Developer 💻",
    "MERN Stack Specialist 🚀",
    "Open Source Contributor 🌍",
  ];

  const colors = ["#ff4c4c", "#00bcd4", "#4caf50"];
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <span
      style={{
        color: colors[colorIndex],
        fontSize: "1.5rem",
        transition: "color 0.3s ease-in-out",
      }}
    >
      <TypeAnimation
        sequence={[
          () => setColorIndex(0),
          phrases[0],
          3000,
          () => setColorIndex(1),
          phrases[1],
          3000,
          () => setColorIndex(2),
          phrases[2],
          3000,
        ]}
        speed={50}
        repeat={Infinity}
        wrapper="span"
        style={{ display: "inline-block" }}
      />
    </span>
  );
};

export default TypeWriter;
