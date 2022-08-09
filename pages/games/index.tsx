import React from "react";
import { Container } from "@mui/material";
import GameRouter from "../../src/components/GameRouter";

const gameList = [
  {
    id: 1,
    name: "Memory Game",
    path: "/memory",
  },
];

const GameList = () => {
  return (
    <Container sx={{ marginTop: "20px" }}>
      {gameList.map(({ id, name, path }) => (
        <GameRouter key={id} path={path} name={name} />
      ))}
    </Container>
  );
};

export default GameList;
