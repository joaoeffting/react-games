import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

type GameEndedProps = {
  onPlayAgain: () => void;
  text: string;
};

const GameEnded = ({ onPlayAgain, text }: GameEndedProps) => {
  const onFinish = () => {
    document.location.href = "/";
  };
  return (
    <Dialog
      open
      onClose={onFinish}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
      <DialogActions>
        <Button variant="contained" onClick={onPlayAgain}>
          Play Again
        </Button>
        <Button onClick={onFinish}>Choose Another Game</Button>
      </DialogActions>
    </Dialog>
  );
};

export default GameEnded;
