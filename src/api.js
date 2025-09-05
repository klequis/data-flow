import { action, query } from "@solidjs/router";

// const log = console.log;
const waitMs = 1000;

const dataStore = ["a"];
const setData = async (newItem) => {
  "use server";
  dataStore.push(newItem);
  return new Promise((r) => setTimeout(() => r(dataStore), waitMs));
};

const getData = async () => {
  "use server";
  return new Promise((r) => setTimeout(() => r(dataStore), waitMs));
};

export const addData = action(async (formData) => {
  "use server";
  const itm = formData.get("item");
  await setData(itm);
}, "addData");

export const dataQuery = query(async () => {
  "use server";
  const r = await getData();
  return r;
});
