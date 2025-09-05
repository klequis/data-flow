import { action, json, query } from "@solidjs/router";
import { logFn } from "../utils/logFn";
import { getLetters, setLetters } from "./lettersDb";
import { getNumbers, setNumbers } from "./numbersDb";
const log = console.log
const modName = "api.js";

//* letters

export const lettersQuery = query(async () => {
  "use server";
  // logFn(modName, "lettersQuery");
  const r = await getLetters();
  return r;
}, "lettersQuery");

export const addLetterAction = action(async (formData) => {
  "use server";
  const itm = formData.get("item");
  await setLetters(itm);
  return json(true, { revalidate: "lettersQuery" })
  
}, "addLetterAction");

//* numbers

export const numbersQuery = query(async () => {
  "use server";
  // logFn(modName, "numbersQuery");
  const r = await getNumbers();
  return r;
}, "numbersQuery");

export const addNumberAction = action(async (formData) => {
  "use server";
  logFn(modName, "addNumberAction")
  const itm = formData.get("item");
  log('itm', itm)
  await setNumbers(itm);
  // return json(true, { revalidate: ["lettersQuery"] })
}, "addNumberAction");