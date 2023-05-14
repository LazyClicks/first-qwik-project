import { component$, useStyles$ } from "@builder.io/qwik";
import Styles from "./about.module.css?inline";

export default component$(() => {
  useStyles$(Styles);
  return (
    <article>
      <h2>ABOUT</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        perferendis, recusandae, consectetur ea repellat adipisci repellendus,
        amet sapiente incidunt aut voluptates officia accusantium. Incidunt
        fugiat natus fugit repellat tempora ratione.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        perferendis, recusandae, consectetur ea repellat adipisci repellendus,
        amet sapiente incidunt aut voluptates officia accusantium. Incidunt
        fugiat natus fugit repellat tempora ratione.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        perferendis, recusandae, consectetur ea repellat adipisci repellendus,
        amet sapiente incidunt aut voluptates officia accusantium. Incidunt
        fugiat natus fugit repellat tempora ratione.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        perferendis, recusandae, consectetur ea repellat adipisci repellendus,
        amet sapiente incidunt aut voluptates officia accusantium. Incidunt
        fugiat natus fugit repellat tempora ratione.
      </p>
    </article>
  );
});
