import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./Memory.module.css";
import { shuffleArray } from "../../utils/shuffleArray";
import { generateDeck } from "../../utils/generateDeck";

const DECK = [
  {
    id: 1,
    name: "Abra",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
  },
  {
    id: 2,
    name: "Kadabra",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
  },
  {
    id: 3,
    name: "Alakazam",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
  },
  {
    id: 4,
    name: "Gastly",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
  },
  {
    id: 5,
    name: "Haunter",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
  },
  {
    id: 6,
    name: "Gengar",
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
  },
];

const columnsNumber = 4;
const containerWidth = 600;
const containerHeight = 400;
const deckNumber = DECK.length * 2;

const Memory = () => {
  const [deck, setDeck] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [correctItemsIds, setCorrectItemsIds] = useState([]);

  useEffect(() => {
    setDeck(shuffleArray(generateDeck(DECK)));
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
  }, [selectedIds, correctItemsIds]);

  const onItemClick = (itemId) => {
    if (selectedIds.length < 2) setSelectedIds([...selectedIds, itemId]);
  };

  return (
    <div className={styles["container"]}>
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
