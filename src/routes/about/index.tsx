import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";
import Styles from "./about.module.css?inline";
import Modal from "~/components/modal/modal";

export default component$(() => {
  const modalVisible = useSignal(false);
  const closeModal = $(() => {
    modalVisible.value = false;
  });

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

      <button onClick$={() => (modalVisible.value = true)}>modal</button>
      {modalVisible.value && (
        <Modal size="sm" frosted={true} close={closeModal}>
          <div q:slot="main-content">
            <h2>Hello!!</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            </p>
          </div>
          <div q:slot="footer">
            <button>Sign up</button>
          </div>
        </Modal>
      )}
    </article>
  );
});
