import React from "react";
import Typography from "@mui/material/Typography";
import BreadcrumbsMUI from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Breadcrumbs = ({ children }: { children: React.ReactNode }) => {
  return (
    <BreadcrumbsMUI
      aria-label="breadcrumb"
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      {children}
    </BreadcrumbsMUI>
  );
};

export default Breadcrumbs;
