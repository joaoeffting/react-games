import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Breadcrumbs } from "../UI";
import PokemonLogo from "../../../public/pokemon-logo.png";
import DigimonLogo from "../../../public/digimon-logo.png";

type DeckProps = {
  url: any;
  itemId: string;
};

const Deck = ({ url, itemId }: DeckProps) => {
  return (
    <div
      onClick={() => (window.location.href = `/memory/${itemId}`)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        width: "300px",
        height: "150px",
        margin: "10px",
        border: "1px solid black",
      }}
    >
      <Image src={url} alt="question" width="200px" height="100px" />
    </div>
  );
};

const SelectDeck = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/games">
          All Games
        </Link>
        <Typography color="text.primary">Select a Deck</Typography>
      </Breadcrumbs>
      <div style={{ display: "flex" }}>
        <Deck url={PokemonLogo} itemId="pokemon" />
        <Deck url={DigimonLogo} itemId="digimon" />
      </div>
    </div>
  );
};

export default SelectDeck;
