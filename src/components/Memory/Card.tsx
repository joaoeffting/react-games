import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { DeckType } from "../../types/Deck.types";
import questionImage from "../../../public/question.png";

type CardProps = {
  item: DeckType;
  isItemSelected: boolean;
  onItemClick: (id: number) => void;
};

const Card = ({ item, isItemSelected, onItemClick }: CardProps) => {
  return (
    <ImageListItem onClick={() => onItemClick(item.id)}>
      <Image
        src={isItemSelected ? item.image : questionImage}
        alt={item.name}
        width="100%"
        height="100%"
      />
    </ImageListItem>
  );
};

export default Card;
