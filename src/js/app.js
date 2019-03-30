import "../style/app.scss";
import Keys from "./Keys.js";
import Display from "./Display.js";
import { numKeysTemplate } from "./template.js";

const numKeys = new Keys({
  el: ".number-keys",
  template: numKeysTemplate
});

// const caclDisplay = new Display({
//    el: '.caculator__disaplaybox',
// });

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  numKeys.init();
});
