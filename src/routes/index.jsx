import { createAsync, useSubmission } from "@solidjs/router";
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
  const numbers = createAsync(() => numbersQuery(), {deferStream: true});
  const letters = createAsync(() => lettersQuery(), { deferStream: true});
  const specialChars = createAsync(() => specialCharsQuery(), {deferStream: true})

  const subNumbers = useSubmission(addNumberAction)
  const subLetters = useSubmission(addLetterAction)
  const subSpecial = useSubmission(addSpecialCharAction)
  // const specialChars = createAsync(
  //   (() => {
  //     console.log("- specialChars");
  //     return () => specialCharsQuery();
  //   })()
  // );
  onMount(() => log("- onMount: isServer", {isServer, time: time()}))

  createEffect(() => {

    log("subNumbers.pending", subNumbers.pending);
    log("subNumbers.result", subNumbers.result); //* string || undefined
    log("subNumbers.input", subNumbers.input?.[0].get("item"));
    log("subNumbers.input", subNumbers.input)
    log("subNumbers.error", subNumbers.error?.message)
  });

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
      <h1>input {subNumbers.input?.[0]}</h1>
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
