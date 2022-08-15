// libs
import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LinkMUI from "@mui/material/Link";

// components
import { Breadcrumbs } from "../UI";
import Card from "./Card";
import Score from "../Score";
import GameEnded from "../GameEnded/GameEnded";

//utils
import { shuffleArray } from "../../utils/shuffleArray";
import { generateDeck } from "../../utils/generateDeck";
import getDeckById from "../../utils/getDeckById";

// types
import { DeckType } from "../../types/Deck.types";

type PlayProps = {
  deckId: string;
};

const columnsNumber = 4;
const containerWidth = 600;
const containerHeight = 400;

const userTriesConst = 10;

const Play = ({ deckId }: PlayProps) => {
  const [deck, setDeck] = useState<DeckType[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [correctItemsIds, setCorrectItemsIds] = useState<number[]>([]);
  const [userTries, setUserTries] = useState<number>(userTriesConst);
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
        } else {
          setUserTries((prev) => prev - 1);
        }
        setSelectedIds([]);
      }, 1000);
    }
  }, [selectedIds, correctItemsIds, deckNumber]);

  const onItemClick = (itemId: number) => {
    const isItemSelected = selectedIds.includes(itemId);
    if (selectedIds.length < 2 && !isItemSelected)
      setSelectedIds([...selectedIds, itemId]);
  };

  const onResetGame = () => {
    setDeck(shuffleArray(deck));
    setSelectedIds([]);
    setCorrectItemsIds([]);
    setUserTries(userTriesConst);
  };

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  const isGameFinished = correctItemsIds.length === deck.length;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Breadcrumbs>
        <LinkMUI underline="hover" color="inherit" href="/games">
          All Games
        </LinkMUI>
        <LinkMUI underline="hover" color="inherit" href="/memory">
          Select a Deck
        </LinkMUI>
        <Typography color="text.primary">Memory Game</Typography>
      </Breadcrumbs>
      <Score score={userTries} />
      {userTries === 0 && (
        <GameEnded onPlayAgain={onResetGame} text="You Lose 😔" />
      )}
      {isGameFinished && (
        <GameEnded onPlayAgain={onResetGame} text="You Win 🤩" />
      )}
      <ImageList gap={20} cols={matchDownMd ? 3 : 6}>
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
      </ImageList>
    </div>
  );
};

export default Play;
