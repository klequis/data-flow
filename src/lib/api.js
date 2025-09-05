import { action, query } from "@solidjs/router";
import { logFn } from "../utils/logFn";
import { getLetters, setLetters } from "./lettersDb";
import { getNumbers } from "./numbersDb";

const modName = "api.js";

//* letters

export const lettersQuery = query(async () => {
  "use server";
  logFn("lettersQuery");
  const r = await getLetters();
  return r;
});
export const addLetterAction = action(async (formData) => {
  "use server";
  const itm = formData.get("item");
  await setLetters(itm);
}, "addData");

//* numbers

export const numbersQuery = query(async () => {
  "use server";
  logFn(modName, "numbersQuery");
  const r = await getNumbers();
  return r;
});
