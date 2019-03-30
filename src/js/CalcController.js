import Observable from "./Observable.js";
const CalcController = class extends Observable {
  constructor({ model }) {
    super();
    this.model = model;
  }
  init() {
    this.model.subscribe(this.fire.bind(this));
  }
  updateResult() {}
};

export default CalcController;
