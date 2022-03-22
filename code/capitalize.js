function capitalize(word) {
  return word.trim()[0].toUpperCase() + word.trim().slice(1).toLowerCase();
}

export default capitalize;
