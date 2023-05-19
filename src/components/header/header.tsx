import { component$, useStyles$ } from "@builder.io/qwik";
import Style from "./header.css?inline";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStyles$(Style);
  return (
    <header>
      <nav>
        <Link href="/">
          <img src="/mario_block.jpeg" alt="logo" />
          <h1>Mario Life</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});
