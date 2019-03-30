import Observable from "./Observable.js";
const CalcModel = class extends Observable {
  constructor() {
    super();
    this.isBegin = true;
    this.calcStack = [];
    this.caclResult = 0;
  }
  init() {
    this.fire({ caclResult: this.caclResult });
    console.log("init Model");
  }
};

export default CalcModel;
