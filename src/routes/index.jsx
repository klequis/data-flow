import { createAsync } from "@solidjs/router";
import { createEffect, Show } from "solid-js";
import {
  lettersQuery,
  numbersQuery,
  addLetterAction,
  addNumberAction,
} from "../lib/api";
import { logTime } from "~/utils/logTime";
import { addSpecialCharAction, specialCharsQuery } from "~/lib/apiSpecial";

const log = console.log;

export default function Home() {
  log("- Home")
  // const numbers = createAsync(() => numbersQuery());
  // const letters = createAsync(() => lettersQuery());
  //* createAsync only gets called once.
  //* specialChars = () => specialCharsQuery() // i.e., a function
  // const specialChars = createAsync(() => specialCharsQuery())
  const specialChars = createAsync(
    (() => {
      console.log('- specialChars')
      return () => specialCharsQuery()
    }
    )()
  )
  
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

      {/* <h2>Numbers</h2>
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
      </Show> */}
    </main>
  );
}
