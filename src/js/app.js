import "../style/app.scss";
import Keys from "./Keys.js";
import Display from "./Display.js";
import CalcModel from "./CalcModel.js";
import CalcController from "./CalcController.js";
import { numKeysTemplate, basicCalcKeysTemplate, fnCalcKeysTemplate } from "./template.js";

const calcModel = new CalcModel();
const calcController = new CalcController({ model: calcModel });

const numKeys = new Keys({
  el: ".number-keys",
  template: numKeysTemplate
});

const basicCalcKeys = new Keys({
  el: ".calc-keys",
  template: basicCalcKeysTemplate
});

const fnKeys = new Keys({
  el: ".fn-keys",
  template: fnCalcKeysTemplate
});

const caclDisplay = new Display({
  el: ".caculator__disaplaybox",
  controller: calcController
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  calcController.init();
  caclDisplay.init();
  calcModel.init();
  //keys init
  numKeys.init();
  basicCalcKeys.init();
  fnKeys.init();
});
