import { invoke } from "@tauri-apps/api/core";
import { Command } from "@tauri-apps/plugin-shell";

let greetInputEl: HTMLInputElement | null;
let greetMsgEl: HTMLElement | null;

async function greet() {
  if (greetMsgEl && greetInputEl) {
    // Run a shell command.
    // Note: See `src-tauri/capabilities/default.json` for the corresponding permissions.
    let result = await Command.create("exec-sh", [
      "-c",
      "ls"
    ]).execute();
    console.log(result);

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsgEl.textContent = await invoke("greet", {
      name: `${greetInputEl.value} ${result.stdout}`,
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document.querySelector("#greet-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    greet();
  });
});
