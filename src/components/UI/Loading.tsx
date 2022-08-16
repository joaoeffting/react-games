import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "20%",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default Loading;
