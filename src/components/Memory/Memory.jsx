import React, { useEffect, useState } from "react";
import Card from "./Card";
import SelectDeck from "./SelectDeck";
import styles from "./Memory.module.css";
import { shuffleArray } from "../../utils/shuffleArray";
import { generateDeck } from "../../utils/generateDeck";
import getDeckById from "./getDeckById";

const columnsNumber = 4;
const containerWidth = 600;
const containerHeight = 400;

const Memory = () => {
  const [deck, setDeck] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [correctItemsIds, setCorrectItemsIds] = useState([]);
  const deckNumber = deck.length;

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

  const onItemClick = (itemId) => {
    if (selectedIds.length < 2) setSelectedIds([...selectedIds, itemId]);
  };

  const onSelectDeck = (deckId) => {
    const selectedDeck = getDeckById(deckId);
    setDeck(shuffleArray(generateDeck(selectedDeck)));
  };

  if (deck.length === 0) return <SelectDeck onSelectDeck={onSelectDeck} />;

  return (
    <div className={styles["container"]}>
      <a href="/memory">Select a new deck</a>
      <div
        className={styles["memory-game"]}
        style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
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

export default Memory;
