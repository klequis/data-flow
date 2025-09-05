const letterDb = ["a"];

export const setLetters = async (newLetter) => {
  "use server";
  letterDb.push(newLetter);
  return new Promise((r) => setTimeout(() => r(letterDb), 1000));
};

export const getLetters = async () => {
  "use server";
  return new Promise((r) => setTimeout(() => r(letterDb), 1000));
};
