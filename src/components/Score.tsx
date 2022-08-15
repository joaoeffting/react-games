import React from "react";
import Alert from "@mui/material/Alert";

type ScoreProps = {
  score: number;
};

const Score = ({ score }: ScoreProps) => {
  return (
    <Alert severity="info" sx={{ width: "80% " }}>
      You have {score} tries!
    </Alert>
  );
};

export default Score;
