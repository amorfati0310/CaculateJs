import Observable from "./Observable.js";
const CalcController = class extends Observable {
  constructor({ model }) {
    super();
    this.model = model;
  }
  init() {
    this.model.subscribe(this.fire.bind(this));
  }
  sendInputKey(inpuyKeyInfo) {
    this.model.calc(inpuyKeyInfo);
  }
};

export default CalcController;
