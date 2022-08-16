import React, { useEffect, useState } from "react";
import Memory from "../../src/components/Memory/Memory";

import type { DecksType } from "../../src/types/DecksList.type";

const MemoryPage = () => {
  const [decks, setDecks] = useState<DecksType[]>([]);
  useEffect(() => {
    const getAllGamesApi = async () => {
      const response = await fetch("/api/getAllDecks");
      const decks = await response.json();
      setDecks(decks);
    };
    getAllGamesApi();
  }, []);
  return <Memory decks={decks} />;
};

export default MemoryPage;
