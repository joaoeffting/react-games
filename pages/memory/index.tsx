import React, { useEffect, useState } from "react";
import Memory from "../../src/components/Memory/Memory";
import Loading from "../../src/components/UI/Loading";
import type { DecksType } from "../../src/types/DecksList.type";

const DecksList = () => {
  const [decks, setDecks] = useState<DecksType[]>([]);
  useEffect(() => {
    const getAllGamesApi = async () => {
      const response = await fetch("/api/getAllDecks");
      const decks = await response.json();
      setDecks(decks);
    };
    getAllGamesApi();
  }, []);

  if (decks.length === 0) {
    return <Loading />;
  }

  return <Memory decks={decks} />;
};

export default DecksList;
