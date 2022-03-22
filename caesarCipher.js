const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, shift) {
  let caesarCoded = "";
  for (const letter of string.toLowerCase().split("")) {
    if (!alphabet.includes(letter)) {
      caesarCoded += letter;
      continue;
    }
    caesarCoded += getLetter(letter, shift);
  }
  return caesarCoded;
}

function getLetter(letter, shift) {
  if (alphabet.indexOf(letter) + shift >= alphabet.length) {
    return alphabet[(alphabet.indexOf(letter) + shift) % 26];
  }
  return alphabet[alphabet.indexOf(letter) + shift];
}

export default caesarCipher;
