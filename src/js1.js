const revertCheractor = (value) => {
  return String(value).split("").reverse().join("");
}

console.log(revertCheractor('UNIVERSITY'))