import React from "react";
import { SxProps, Theme } from "@mui/system";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";

type LogoPropTypes = {
  brandName: string;
  sxIcon?: SxProps<Theme> | undefined;
  sxTypography?: SxProps<Theme> | undefined;
};

const Logo = ({ brandName, sxIcon, sxTypography }: LogoPropTypes) => {
  return (
    <>
      <AdbIcon sx={sxIcon} />
      <Typography variant="h6" noWrap component="a" href="/" sx={sxTypography}>
        {brandName}
      </Typography>
    </>
  );
};

export default Logo;
