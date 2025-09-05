import { logFn } from "~/utils/logFn";

const modName = "numbersDb"
const numberDb = [1]

export const setNumbers = async (newNumber) => {
  "use server"
//   logFn(modName, "setNumbers")
  numberDb.push(newNumber);

  return new Promise((r) => setTimeout(() => r(numberDb), 1000));
};
export const getNumbers = async () => {
  "use server";
//   logFn(modName, "getNumbers")
  return new Promise((r) => setTimeout(() => r(numberDb), 1000));
};