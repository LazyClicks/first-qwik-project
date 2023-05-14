import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/router-head/header/header";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="container">
          <Slot />
        </section>
      </main>
      <footer>
        <p>Mario Life @ 2023</p>
      </footer>
    </>
  );
});
