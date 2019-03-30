import Observable from "./Observable.js";
const CalcController = class extends Observable {
  constructor({ model }) {
    super();
    this.model = model;
  }
  init() {
    this.model.subscribe(this.fire.bind(this));
  }
  inpuyKey(inpuyKey) {
    this.model.sendInputKey(inpuyKey);
  }
};

export default CalcController;
