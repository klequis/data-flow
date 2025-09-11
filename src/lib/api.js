import { action, json, query } from "@solidjs/router";
import { logFn } from "../utils/logFn";
import { getData, setData } from "./db";
const log = console.log;
const modName = "api.js";

//* numbers

export const numbersQuery = query(async () => {
  "use server";
  // logFn(modName, "numbersQuery");
  log("- numbersQuery")
  const r = await getData("numbers", "data");
  return r;
}, "numbersQuery");

export const addNumberAction = action(async (formData) => {
  "use server";
  log("- addNumberAction")
  // logFn(modName, "addNumberAction")
  try {
    const itm = formData.get("item");
    // log('itm', itm)
    const numbers = await getData("numbers", "data");
    // log("numbers:", numbers)
    // const toSet = numbers !== null ? [...numbers, itm] : [itm]
    const toSet = numbers ? [...numbers, itm] : [itm];
    // log("toSet:", toSet)
    await setData("numbers", "data", toSet);
  } catch (e) {
    log("e:", e);
  }
  // return json(true, { revalidate: ["lettersQuery"] })
}, "addNumberAction");

//* letters

export const lettersQuery = query(async () => {
  "use server";
  // logFn(modName, "lettersQuery");
  log("- lettersQuery")
  const r = await getData("letters", "data");
  return r;
}, "lettersQuery");

export const addLetterAction = action(async (formData) => {
  "use server";
  // logFn(modName, "addLetterAction")
  log("- addLetterAction")
  const itm = formData.get("item");
  // log('itm:', itm)
  const letters = await getData("letters", "data");
  // log('letters:', letters)
  const toSet = letters ? [...letters, itm] : [itm];
  // log('toSet', toSet)
  await setData("letters", "data", toSet);
  // return json(true, { revalidate: "lettersQuery" })
}, "addLetterAction");
