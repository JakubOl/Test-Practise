import capitalize from "./capitalize";

test("Capitalize pOlAnD", () => {
  expect(capitalize("pOlanD")).toBe("Poland");
});

test("Words with spaces 'cos cos cos'", () => {
  expect(capitalize("cos cos cos")).toBe("Cos cos cos");
});

test("Start,end spaces '  wond E E  '", () => {
  expect(capitalize("  wond E E  ")).toBe("Wond e e");
});

test("Extra spaces '  HEY YOU    E  '", () => {
  expect(capitalize("  HEY YOU    E  ")).toBe("Hey you    e");
});
