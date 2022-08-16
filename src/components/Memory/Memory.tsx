import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Breadcrumbs } from "../UI";
import type { DecksType } from "../../types/DecksList.type";

type DeckProps = {
  image: any;
  deckName: string;
};

const Deck = ({ image, deckName }: DeckProps) => {
  return (
    <div
      data-test-name={`${deckName}-link`}
      onClick={() => (window.location.href = `/memory/${deckName}`)}
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
      <Image src={image} alt="question" width="200px" height="100px" />
    </div>
  );
};

const Memory = ({ decks }: { decks: DecksType[] }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Breadcrumbs>
        <Link underline="hover" color="inherit" href="/games">
          All Games
        </Link>
        <Typography color="text.primary">Select a Deck</Typography>
      </Breadcrumbs>
      <div style={{ display: "flex" }}>
        {decks.map(({ image, deck_name }) => {
          return <Deck key={deck_name} image={image} deckName={deck_name} />;
        })}
      </div>
    </div>
  );
};

export default Memory;
