import caesarCipher from "./caesarCipher";

test("test Computer", () => {
  expect(caesarCipher("Computer", 1)).toBe("dpnqvufs");
});

test("test 'monkey monkey donkey'", () => {
  expect(caesarCipher("monkey monkey donkey", 13)).toBe("zbaxrl zbaxrl qbaxrl");
});

test("test 'caesar cipher decoder'", () => {
  expect(caesarCipher("caesar cipher decoder", 21)).toBe(
    "xvznvm xdkczm yzxjyzm"
  );
});
test("test 'c.,.aes::ar ciph!!er%% decoder'", () => {
  expect(caesarCipher("c.,.aes::ar ciph!!er%% decoder", 16)).toBe(
    "s.,.qui::qh syfx!!uh%% tusetuh"
  );
});
