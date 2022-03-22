import reverseString from "./reverseString";

test("Reverse 'Annonymous'", () => {
  expect(reverseString("Annonymous")).toBe("suomynonnA");
});

test("Reverse 'Cos Cos Cos'", () => {
  expect(reverseString("Cos Cos Cos")).toBe("soC soC soC");
});

test("Reverse '  12  12  12 32'", () => {
  expect(reverseString("  12  12  12 32")).toBe("23 21  21  21  ");
});
test("Reverse 123", () => {
  expect(reverseString(123)).toBe("Not a string");
});
