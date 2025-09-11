import { action, json, query } from "@solidjs/router";
import { logFn } from "../utils/logFn";
import { getData, setData } from "./db";
const log = console.log;
const modName = "apiSpecial.js";
//* specialChars

export const specialCharsQuery = query(async () => {
  "use server";
  // logFn(modName, "specialCharsQuery");
  log('- specialCharsQuery')
  const r = await getData("specialChars", "data");
  // log("r", r);
  return r;
}, "specialCharsQuery");

export const addSpecialCharAction = action(async (formData) => {
  "use server";
  // logFn(modName, "addSpecialCharAction")
  const itm = formData.get("item");
  // log('itm:', itm)
  const chars = await getData("specialChars", "data");
  // log('letters:', letters)
  const toSet = chars ? [...chars, itm] : [itm];
  // log('toSet', toSet)
  await setData("specialChars", "data", toSet);
  // return json(true, { revalidate: "lettersQuery" })
}, "addSpecialCharAction");
