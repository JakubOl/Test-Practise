function reverseString(string) {
  if (typeof string !== "string") return "Not a string";
  const arr = string.split("");
  let reversed = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed += arr[i];
  }
  return reversed;
}

export default reverseString;
