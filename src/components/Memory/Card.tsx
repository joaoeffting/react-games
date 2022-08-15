import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { DeckType } from "../../types/Deck.types";
import questionImage from "../../../public/question.png";

type CardProps = {
  item: DeckType;
  sizes: {
    containerWidth: number;
    containerHeight: number;
    columnsNumber: number;
  };
  isItemSelected: boolean;
  onItemClick: (id: number) => void;
};

const Card = ({ item, sizes, isItemSelected, onItemClick }: CardProps) => {
  const { containerWidth, columnsNumber } = sizes;
  const cardWidth = containerWidth / columnsNumber - 5;
  return (
    <ImageListItem onClick={() => onItemClick(item.id)}>
      <Image
        src={isItemSelected ? item.src : questionImage}
        alt={item.name}
        width="100%"
        height="100%"
      />
    </ImageListItem>
  );
};

export default Card;
