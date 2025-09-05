import { logFn } from "~/utils/logFn";
const log = console.log
const modName = "lettersDb"

const letterDb = ["a"];

export const setLetters = async (newLetter) => {
  "use server";
  logFn(modName, "setLetters")
  letterDb.push(newLetter);
  log('letterDb:', letterDb)
  return new Promise((r) => setTimeout(() => r(letterDb), 1000));
};

export const getLetters = async () => {
  "use server";
  logFn(modName, "getLetters")
  log('letterDb:', letterDb)
  return new Promise((r) => setTimeout(() => r(letterDb), 1000));
};
