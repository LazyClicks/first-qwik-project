import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="background">
      <h2>oki dokie</h2>
      <p>mario talk</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mario Life",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
