import React, { useEffect, useState } from "react";
import Link from "next/link";
import Card from "./Card";

import { shuffleArray } from "../../utils/shuffleArray";
import { generateDeck } from "../../utils/generateDeck";
import getDeckById, { DeckType } from "./getDeckById";

import styles from "./Memory.module.css";

type PlayProps = {
  deckId: string;
};

const columnsNumber = 4;
const containerWidth = 600;
const containerHeight = 400;

const Play = ({ deckId }: PlayProps) => {
  const [deck, setDeck] = useState<DeckType>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [correctItemsIds, setCorrectItemsIds] = useState<number[]>([]);
  const deckNumber = deck.length;

  useEffect(() => {
    const selectedDeck = getDeckById(deckId);
    setDeck(shuffleArray(generateDeck(selectedDeck)));
  }, []);

  useEffect(() => {
    if (selectedIds.length === 2) {
      setTimeout(() => {
        const sortedArray = selectedIds.sort((a, b) => a - b);
        if (sortedArray[0] + deckNumber === sortedArray[1]) {
          setCorrectItemsIds([...correctItemsIds, ...selectedIds]);
        }
        setSelectedIds([]);
      }, 1000);
    }
  }, [selectedIds, correctItemsIds, deckNumber]);

  const onItemClick = (itemId: number) => {
    if (selectedIds.length < 2) setSelectedIds([...selectedIds, itemId]);
  };
  return (
    <div className={styles["container"]}>
      <Link href="/memory">
        <a>Select a new deck</a>
      </Link>
      <div
        className={styles["memory-game"]}
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
        }}
      >
        {deck.map((item) => {
          const isItemSelected =
            selectedIds.includes(item.id) || correctItemsIds.includes(item.id);
          return (
            <Card
              key={item.id}
              item={item}
              isItemSelected={isItemSelected}
              onItemClick={onItemClick}
              sizes={{
                containerWidth,
                containerHeight,
                columnsNumber,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Play;
