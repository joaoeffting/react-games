import React from "react";
import Image from "next/image";
import PokemonLogo from "../../../public/pokemon-logo.png";
import DigimonLogo from "../../../public/digimon-logo.png";

const Deck = ({ url, itemId, onSelectDeck }) => {
  return (
    <div
      onClick={() => onSelectDeck(itemId)}
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

const SelectDeck = ({ onSelectDeck }) => {
  return (
    <div style={{ display: "flex" }}>
      <Deck url={PokemonLogo} itemId="pokemon" onSelectDeck={onSelectDeck} />
      <Deck url={DigimonLogo} itemId="digimon" onSelectDeck={onSelectDeck} />
    </div>
  );
};

export default SelectDeck;
