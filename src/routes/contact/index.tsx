import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Styles from "./contact.module.css?inline";

export default component$(() => {
  useStylesScoped$(Styles);
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, natus?
        Possimus, laudantium. Soluta rem atque illo reiciendis, accusamus culpa
        ipsam omnis aliquid corrupti placeat qui, esse laborum aspernatur
        consectetur adipisci.
      </p>
    </div>
  );
});
