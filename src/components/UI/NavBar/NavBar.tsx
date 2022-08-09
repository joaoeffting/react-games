import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import MenuMobile from "../Menus/MenuMobile";
import MenuDesktop from "../Menus/MenuDesktop";

type NavBarProps = {
  appName: string;
};

const NavBar = ({ appName }: NavBarProps) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuMobile appName={appName} />
          <MenuDesktop appName={appName} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
