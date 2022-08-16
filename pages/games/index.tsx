import React, { useEffect } from "react";
import { Container } from "@mui/material";
import GameRouter from "../../src/components/GameRouter";
import Loading from "../../src/components/UI/Loading";

const GameList = () => {
  const [games, setGames] = React.useState([]);
  useEffect(() => {
    const getAllGamesApi = async () => {
      const response = await fetch("/api/getAllGames");
      const games = await response.json();
      setGames(games);
    };
    getAllGamesApi();
  }, []);

  if (games.length === 0) {
    return <Loading />;
  }

  return (
    <Container sx={{ marginTop: "20px" }}>
      {games.map(({ _id, name, path, image }) => (
        <GameRouter key={_id} path={path} name={name} image={image} />
      ))}
    </Container>
  );
};

export default GameList;
