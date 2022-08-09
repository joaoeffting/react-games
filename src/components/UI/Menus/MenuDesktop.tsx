import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../Logo/Logo";
import { pages } from "./pages";

type NavBarProps = {
  appName: string;
};

const MenuDesktop = ({ appName }: NavBarProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            href="/books"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>

      <Logo
        brandName={appName}
        sxIcon={{ display: { xs: "flex", md: "none" }, mr: 1 }}
        sxTypography={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      />
    </>
  );
};

export default MenuDesktop;
