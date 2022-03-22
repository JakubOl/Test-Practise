import calculator from "./calculator";

test("add 5+8", () => {
  expect(calculator.add(5, 8)).toBe(13);
});

test("substract 10-3", () => {
  expect(calculator.subtract(10, 3)).toBe(7);
});

test("divide 64/4", () => {
  expect(calculator.divide(64, 4)).toBe(16);
});

test("multiplty 4*7", () => {
  expect(calculator.multiply(4, 7)).toBe(28);
});

test("multiplty '4'*7", () => {
  expect(calculator.multiply("4", 7)).toBe("Invalid input");
});

test("divide by 0", () => {
  expect(calculator.divide(6, 0)).toBe("Zero division");
});

test("decimal ", () => {
  expect(calculator.divide(7, 3)).toBe(2.33);
});

test("decimal ", () => {
  expect(calculator.multiply(7.3333, 3.33)).toBe(24.42);
});

test("negative numbers -5*7", () => {
  expect(calculator.multiply(-5, 7)).toBe(-35);
});

test("negative numbers -5/7", () => {
  expect(calculator.divide(-5, 7)).toBe(-0.71);
});
