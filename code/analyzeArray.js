function analyzeArray(array) {
  if (typeof array !== "object") return "Input should be an array";
  if (array.length === 0) return "Empty Array";
  return {
    average: array.reduce((acc, i) => acc + i) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export default analyzeArray;
