import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";
import { logFn } from "~/utils/logFn";
import { wait } from "~/utils/wait";

//* Type: StorageValue
//* import { StorageValue } from "unstorage";
//* `type StorageValue = string | number | boolean | object | null`

const waitTime = 2000;
const log = console.log;
const modName = "db.js";

const storage = createStorage({
  driver: fsLiteDriver({
    base: "./.data",
  }),
});

export async function getData(collection, item) {
  "use server";
//   logFn(modName, "getData");
//   log("collection:item:", `${collection}:${item}`)
  await wait(waitTime);
  const r = await storage.getItem(`${collection}:${item}`);
  return r ? r : null;
}

export async function setData(collection, item, data) {
  "use server";
//   logFn(modName, "setData");
  await wait(waitTime);
  await storage.setItem(`${collection}:${item}`, data);
}
