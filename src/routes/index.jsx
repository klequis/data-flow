import { createAsync } from "@solidjs/router";
import { createEffect, onMount, Show } from "solid-js";
import { time } from "~/utils/logTime";
import {
  lettersQuery,
  numbersQuery,
  addLetterAction,
  addNumberAction,
} from "../lib/api";
import { logTime } from "~/utils/logTime";
import { addSpecialCharAction, specialCharsQuery } from "~/lib/apiSpecial";
import { isServer } from "solid-js/web";

const log = console.log;

export default function Home() {
  log("- Home: isServer", {isServer, time: time()});
  //? numbers
  // const numbers = createAsync(() => numbersQuery());
  const numbers = createAsync(() => numbersQuery(), {deferStream: true});
  //? letters
  // const letters = createAsync(() => lettersQuery());
  const letters = createAsync(() => lettersQuery(), { deferStream: true});
  //* createAsync only gets called once.
  //? specialCharss
  //* specialChars = () => specialCharsQuery() // i.e., a function
  const specialChars = createAsync(() => specialCharsQuery(), {deferStream: true})
  // const specialChars = createAsync(
  //   (() => {
  //     console.log("- specialChars");
  //     return () => specialCharsQuery();
  //   })()
  // );
  onMount(() => log("- onMount: isServer", {isServer, time: time()}))

  return (
    <main>
      <h1>Home</h1>

      <h2>Special Characters</h2>
      <form action={addSpecialCharAction} method="post">
        <input id="item" name="item" value="" />
        <input type="submit" value="submit" />
      </form>
      <Show when={specialChars()}>
        <p>special chars: {specialChars().toString()}</p>
      </Show>

      <h2>Numbers</h2>
      <form action={addNumberAction} method="post">
        <input id="item" name="item" value="" />
        <input type="submit" value="submit" />
      </form>
      <Show when={numbers()}>
        <p>numbers: {numbers().toString()}</p>
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
