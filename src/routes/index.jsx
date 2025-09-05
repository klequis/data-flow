import { createAsync } from "@solidjs/router";
import { createEffect, For, Show } from "solid-js";
import { dataQuery, addData }  from '../api'

const log = console.log;

export default function Home() {
  const data = createAsync(() => dataQuery());

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
