export const addZeroToEndOfTheDecimal = (i: any) => {
    return i.toLocaleString("en", {
      useGrouping: false,
      minimumFractionDigits: 2,
    });
  };