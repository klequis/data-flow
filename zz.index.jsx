import { action, createAsync, query } from "@solidjs/router";
import { createEffect, For, Show } from "solid-js";

const log = console.log;

const waitMs = 1000;

const dataStore = ["a"];

const api = (() => {
  return {
    setData: async (newItem) => {
      return new Promise((resolve) => {
        dataStore.push(newItem);
        log("setData: dataStore:", dataStore);
        resolve(dataStore);
      });

      // dataStore.push(newItem);
      // return new Promise((r) => {
      //   r(dataStore), waitMs;
      // });
      // return new Promise((r) => setTimeout(() => r(dataStore), waitMs));
    },
    getData: async () => {
      log("getData: data", dataStore);
      return new Promise((r) => setTimeout(() => r(dataStore), waitMs));
    },
  };
})();

const addData = action(async (formData) => {
  const itm = formData.get("item");
  log("addData: itm:", itm);

  await setData(itm);
}, "addData");

const dataQuery = query(async () => {
  return await api.getData();
});

export default function Home() {
  const data = createAsync(async () => dataQuery());

  createEffect(() => {
    if (data()) {
      log("Home: data", data());
    }
  });

  return (
    <main>
      <p>
        <b>Home</b>
      </p>
      <form action={addData} method="post">
        <input id="item" name="item" value="" />
        <input type="submit" value="submit" />
      </form>
      <Show when={data()}>
        <p>Data under here</p>
        <For each={data()}>
          {(i) => {
            return <p>{i}</p>;
          }}
        </For>
      </Show>
    </main>
  );
}
