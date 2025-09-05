import { createAsync } from "@solidjs/router";
import { createEffect, Show } from "solid-js";
import {
  lettersQuery,
  numbersQuery,
  addLetterAction,
  addNumberAction,
} from "../lib/api";
import { logTime } from "~/utils/logTime";

const log = console.log;

export default function Home() {
  const numbers = createAsync(() => numbersQuery());
  const letters = createAsync(() => lettersQuery());

  // const d = () => numbers()[0] * 100;

  createEffect(() => {
    if (numbers()) {
      logTime("time")
      log("numbers().length", numbers().length);
      log("numbers()", numbers().toString());
      log("letters().length", letters().length);
      log("letters()", letters().toString());

      //     log('d', d())
      //     // log('d', d())
      //     // log("typeof d[0]", typeof d[0]);
    }
  });
  // const
  return (
    <main>
      <h1>Home</h1>
      <h2>Numbers</h2>
      <form action={addNumberAction} method="post">
        <input id="item" name="item" value="" />
        <input type="submit" value="submit" />
      </form>
      <Show when={numbers()}>
        {/* <p>numbers: {numbers().map((num,i) => num + ",")}</p> */}
        <p>numbers: {numbers().toString()}</p>
        {/* <p>d: {d()}</p> */}
      </Show>
      <h2>Letters</h2>
      <form action={addLetterAction} method="post">
        <input id="item" name="item" value="" />
        <input type="submit" value="submit" />
      </form>
      <Show when={letters()}>
        <p>letters: {letters().toString()}</p>
      </Show>
    </main>
  );
}
