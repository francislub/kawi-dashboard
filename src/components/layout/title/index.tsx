import React from "react";
import { useRouterContext, type TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";
import logo1 from "../../../assets/logo1.png";

import { logo, nalongo } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo1} style={{marginTop: "20px"}} alt="Nalongo" width="12px" height="12px" />
        ) : (
          <img src={logo1} style={{marginTop: "20px", marginBottom: "16px"}} alt="Nalongo" width="100px" height="100px" />
        )}
      </Link>
    </Button>
  );
};
