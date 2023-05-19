import { Slot, component$, useStylesScoped$ } from "@builder.io/qwik";
import Style from "./modal.css?inline";
import type { PropFunction } from "@builder.io/qwik";

interface ModalProps {
  size: "sm" | "lg";
  frosted: boolean;
  close: PropFunction<() => void>;
}

export default component$((props: ModalProps) => {
  useStylesScoped$(Style);

  return (
    <div class={`modal ${props.size} ${props.frosted && "frosted"}`}>
      <div class="modal-content">
        <div class="close" onClick$={props.close}>
          close
        </div>
        <div class="main-content">
          <Slot name="main-content" />
        </div>
        <footer>
          <Slot name="footer" />
        </footer>
      </div>
    </div>
  );
});
