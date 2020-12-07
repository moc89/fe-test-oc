import React from "react";
import Paper from "@material-ui/core/Paper";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BasketItem } from "./basketItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      paddingTop: theme.spacing(1),
      width: "40%",
      [theme.breakpoints.up(1100 + theme.spacing(2) * 2)]: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(0),
        paddingTop: theme.spacing(3),
      },
    },
  })
);

type Props = {};
export const Basket = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <BasketItem />
      </Paper>
    </div>
  );
};

export default Basket;
