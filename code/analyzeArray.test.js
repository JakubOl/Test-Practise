import analyzeArray from "./analyzeArray";

test("Test [1,8,3,4,2,6]", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Test []", () => {
  expect(analyzeArray([])).toBe("Empty Array");
});

test("Test [7]", () => {
  expect(analyzeArray([7])).toStrictEqual({
    average: 7,
    min: 7,
    max: 7,
    length: 1,
  });
});

test("Test [110, 100, 100, 100, 100]", () => {
  expect(analyzeArray([110, 100, 100, 100, 100]).average).toStrictEqual(102);
});

test("Test [1,8,3,4,2,6]", () => {
  expect(analyzeArray([110, 100, 100, 100, 100]).average).toStrictEqual(102);
});

test("Test ''", () => {
  expect(analyzeArray("")).toStrictEqual("Input should be an array");
});
