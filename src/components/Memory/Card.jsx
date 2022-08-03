import React from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import questionImage from "../../../public/question.png";

const Card = ({ item, sizes, isItemSelected, onItemClick }) => {
  const { containerWidth, columnsNumber } = sizes;
  const cardWidth = containerWidth / columnsNumber - 5;
  return (
    <div
      className={styles["card-container"]}
      style={{
        width: cardWidth,
      }}
      onClick={() => onItemClick(item.id)}
    >
      <Image
        src={isItemSelected ? item.src : questionImage}
        alt={item.name}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Card;
