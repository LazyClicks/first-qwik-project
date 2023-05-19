import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import Styles from "./contact.module.css?inline";


export default component$(() => {
  useStylesScoped$(Styles);
  const formVisible = useSignal(false);
  const formInput = useStore({ name: "", message: "" });
  return (
    <div>
      <h2>Contact</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, natus?
        Possimus, laudantium. Soluta rem atque illo reiciendis, accusamus culpa
        ipsam omnis aliquid corrupti placeat qui, esse laborum aspernatur
        consectetur adipisci.
      </p>

      <button onClick$={() => (formVisible.value = true)}>Contact me</button>

      {formVisible.value && (
        <form
          preventdefault:submit
          onSubmit$={() => {
            console.log(formInput.name + "\n" + formInput.message);
            formInput.name = "";
            formInput.message = "";
          }}
        >
          <span>Your name:</span>
          <input
            type="text"
            value={formInput.name}
            onInput$={(e) =>
              (formInput.name = (e.target as HTMLInputElement).value)
            }
          />
          <span>Your message:</span>
          <textarea
            name=""
            value={formInput.message}
            id=""
            cols={30}
            rows={10}
            onInput$={(e) =>
              (formInput.message = (e.target as HTMLInputElement).value)
            }
          ></textarea>
          <button>Send</button>
        </form>
      )}
      <p>{formInput.name}</p>
      <p>{formInput.message}</p>
    </div>
  );
});
