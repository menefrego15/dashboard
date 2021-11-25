import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "30px",
  width: "800px",
  height: "400px",
  [theme.breakpoints.up("xs")]: {
    width: "300px",
    height: "400px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "600px",
    height: "400px",
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up("md")]: {
    width: "850px",
    height: "500px",
    padding: theme.spacing(3),
  },
}));

function Card() {
  return <CardContainer></CardContainer>;
}

export default Card;
