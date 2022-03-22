const calculator = {
  add: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return "Invalid input";
    return a + b;
  },
  subtract: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return "Invalid input";
    return a - b;
  },
  divide: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return "Invalid input";
    if (b === 0) return "Zero division";
    return parseFloat((a / b).toFixed(2));
  },
  multiply: (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") return "Invalid input";
    return parseFloat((a * b).toFixed(2));
  },
};

export default calculator;
