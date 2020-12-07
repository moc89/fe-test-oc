import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    seperator: {
      margin: "5px 0",
      height: "1px",
      width: "200%",
      background:
        "repeating-linear-gradient(to right,grey 0,grey 3px,transparent 3px,transparent 7px)",
    },
  })
);

export const Seperator = () => {
  const classes = useStyles();
  return <div className={classes.seperator}></div>;
};

export default Seperator;
