import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import basketDummyData from "../BasketDummyData";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import { addZeroToEndOfTheDecimal } from "../utils/CalculationUtils";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { Seperator } from "./seperator";

const GreenButton = withStyles((theme: Theme) => ({
  root: {
    color: "white",
    backgroundColor: blue[500],
    "&:hover": {
      backgroundColor: blue[700],
    },
    textTransform: "none",
  },
}))(Button);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    textField: {
      width: "80%",
    },
    itemNameColumn:{
      width: "50%", 
      textAlign: "left", 
      fontWeight: "normal",
    },
    quantityColumn:{
        width: "20%",
    },
    priceColumn: {
        width: "20%", 
        textAlign: "right", 
        color: "orange",
        fontWeight: "bold",
    },
    deleteIconColumn:{
        width:"10%",
    },
    tableWrapperDiv:{
        padding: "2% 5% 0 5%",
    },
    basketFooter:{
        backgroundColor: "#f5f5f5",
        height: "75px",
        display: "flex",
        justifyContent: "space-around",
        borderTop: "outset",
    },
    totalAmountDiv:{
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: "24px" ,
    },
    basketFooterButtonsDiv:{
        marginTop: "4.1%", 
        marginLeft: "15%",
    }
  })
);

type Props = {
};

export const BasketItem = (props: Props) => {
  const classes = useStyles();
  const [basketItems, setBasketItems] = useState(basketDummyData as any);
  const currency = basketItems !== undefined && basketItems.length > 0 ? basketItems[0].currency : "$";
  const basketIndexCount = basketItems.length - 1;
  let totalAmount = 0;

  const deleteItem = (index: any) => {
    let basketItemsTemp = [...basketItems];
    basketItemsTemp.splice(index, 1);
    setBasketItems(basketItemsTemp);
  };

  const quantityChange = (event: any, index: any) => {
    let basketItemsTemp = [...basketItems];
    basketItemsTemp[index].quantity = event.target.value;
    setBasketItems(basketItemsTemp);
  };

  const clearBasket = () => {
    setBasketItems([]);
  };
  
  const basketRow = basketItems.map((value: any, index: any) => {
    const rowId = `row-${value.id}`;
    totalAmount = totalAmount + value.price * value.quantity;

    return (
      <React.Fragment key={rowId}>
        <tr className="d-flex">
          <th scope="row" className={classes.itemNameColumn} >
            {value.itemName}
          </th>
          <th className={classes.quantityColumn}>
            <TextField
              id="outlined-size-small"
              value={value.quantity || ""}
              onChange={(e) => quantityChange(e, index)}
              variant="outlined"
              size="small"
              className={classes.textField}
            />
          </th>
          <th className={classes.priceColumn}>
              {value.currency + value.price}
          </th>
          <th className={classes.deleteIconColumn} >
            <IconButton
              aria-label="delete"
              style={{ opacity: "0.6" }}
              onClick={() => deleteItem(index)}
            >
              <ClearIcon />
            </IconButton>
          </th>
        </tr>
        {index !== basketIndexCount && (
         <Seperator />
        )}
      </React.Fragment>
    );
  });

  return (
    <>
      <div className={classes.tableWrapperDiv}>
        <table className="table table-borderless">
          <tbody>{basketRow}</tbody>
        </table>
      </div>
      <div className={classes.basketFooter}>
        <div className={classes.totalAmountDiv}>
          {currency + addZeroToEndOfTheDecimal(totalAmount)}
        </div>
        <div className={classes.basketFooterButtonsDiv} >
          <Button style={{ textTransform: "none" }} onClick={clearBasket}>
            Clear
          </Button>
          <GreenButton variant="contained" color="primary">
            Check Out
          </GreenButton>
        </div>
      </div>
    </>
  );
};

export default BasketItem;
