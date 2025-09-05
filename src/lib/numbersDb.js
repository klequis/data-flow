const numberDb = [1]
const setNumbers = async (newNumber) => {
  "use server"
  numberDb.push(newNumber);
  return new Promise((r) => setTimeout(() => r(numberDb), 1000));
};
export const getNumbers = async () => {
  "use server";
  return new Promise((r) => setTimeout(() => r(numberDb), 1000));
};