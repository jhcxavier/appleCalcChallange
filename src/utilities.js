export const key = [
  "AC",
  "+/-",
  "%",
  "÷",
  "7",
  "8",
  "9",
  "×",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

export const getResult = (temp, value, operation) => {
  value = parseFloat(value);
  if (operation === "+") {
    value = (temp + value).toString();

    return value;
  } else if (operation === "-") {
    value = (temp - value).toString();

    return value;
  } else if (operation === "÷") {
    value = (temp / value).toString();

    return value;
  } else if (operation === "×") {
    value = (temp * value).toString();

    return value;
  }
  return (temp + parseFloat(value)).toString();
};
export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
