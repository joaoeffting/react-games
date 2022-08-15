import React from "react";

type ScoreProps = {
  score: number;
};

const Score = ({ score }: ScoreProps) => {
  return <div>You have {score} tries</div>;
};

export default Score;
