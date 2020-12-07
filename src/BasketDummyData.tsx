export interface BasketData {
  [index: number]: { id:number, itemName: any; quantity: any; price: any; currency: any };
}

const basketDummyData: BasketData = [
  { id:0, itemName: "Mountain ", quantity: "3", price: "3.61", currency: "$" },
  { id:1, itemName: "Jack sasd", quantity: "1", price: "1.60", currency: "$" },
  { id:2, itemName: "Jack ", quantity: "1", price: "1.60", currency: "$" },
  // { id:3, itemName: "Jack Daniels", quantity: "1", price: "1.60", currency: "$" },
  // { id:4, itemName: "Mountain Dewwww", quantity: "3", price: "3.60", currency: "$" },
  // { id:5, itemName: "Jack ", quantity: "1", price: "1.60", currency: "$" },
  // { id:6, itemName: "Jack Daniels", quantity: "1", price: "1.60", currency: "$" },
];

export default basketDummyData;
