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
import Loading from "../UI/Loading";

//utils
import { shuffleArray } from "../../utils/shuffleArray";
import { generateDeck } from "../../utils/generateDeck";

// types
import { DeckType } from "../../types/Deck.types";

type PlayProps = {
  deckId: string;
};

const userTriesConst = 10;

const Play = ({ deckId }: PlayProps) => {
  const [deck, setDeck] = useState<DeckType[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [correctItemsIds, setCorrectItemsIds] = useState<number[]>([]);
  const [userTries, setUserTries] = useState<number>(userTriesConst);

  useEffect(() => {
    const getDeckByIdApi = async () => {
      const response = await fetch(`/api/getDeckById/${deckId}`);
      const deck = await response.json();
      setDeck(shuffleArray(generateDeck(deck)));
    };
    getDeckByIdApi();
  }, [deckId]);

  useEffect(() => {
    if (selectedIds.length === 2) {
      setTimeout(() => {
        const sortedArray = selectedIds.sort((a, b) => a - b);
        if (sortedArray[0] + deck.length === sortedArray[1]) {
          setCorrectItemsIds([...correctItemsIds, ...selectedIds]);
        } else {
          setUserTries((prev) => prev - 1);
        }
        setSelectedIds([]);
      }, 1000);
    }
  }, [selectedIds, correctItemsIds, deck.length]);

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

  if (deck.length === 0) {
    return <Loading />;
  }

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
            />
          );
        })}
      </ImageList>
    </div>
  );
};

export default Play;
