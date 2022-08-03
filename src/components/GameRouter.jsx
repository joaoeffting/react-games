import React from "react";
import Image from "next/image";

const GameRouter = ({ url, name }) => {
  return (
    <a href={url}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100px",
          height: "150px",
        }}
      >
        <Image src="/memory.png" alt="memory game" width="100%" height="100%" />
        <div style={{ textAlign: "center" }}>{name}</div>
      </div>
    </a>
  );
};

export default GameRouter;
