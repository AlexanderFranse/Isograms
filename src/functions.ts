export function wordContainsLettersOnly(word: string) {
  if (!word.match(/^[a-zA-Z]+$/)) {
    return false;
  }
  return true;
}

export function isStringEqualToIgnoreCase(word: string) {
  return word.toLowerCase();
}

export function wordContainsNonRepetitiveLettersOnly(word: string) {
  const lowcaseWord = isStringEqualToIgnoreCase(word);
  return lowcaseWord
    .split("")
    .every((char, index, arr) => arr.indexOf(char) === index);
}

export function emptyStringIsAnIsogram(word: string) {
  return word.length === 0;
}

export function isIsogram(word: string) {
  return (
    (wordContainsLettersOnly(word) &&
      isStringEqualToIgnoreCase(word) &&
      wordContainsNonRepetitiveLettersOnly(word)) ||
    emptyStringIsAnIsogram(word)
  );
}
