import { createAsync } from "@solidjs/router";
import { Show } from "solid-js";
import { lettersQuery, numbersQuery } from "../lib/api";

// const log = console.log;

export default function Home() {
  const letters = createAsync(() => lettersQuery());
  const numbers = createAsync(() => numbersQuery());

  return (
    <main>
      <p>
        <b>Home</b>
      </p>
      {/* <form action={addLetterAction} method="post">
        <input id="item" name="item" value="" />
        <input type="submit" value="submit" />
      </form> */}

      <Show when={numbers()}>
        <p>numbers: {numbers()}</p>
      </Show>
      <Show when={letters()}>
        <p>letters: {letters()}</p>
      </Show>
    </main>
  );
}
