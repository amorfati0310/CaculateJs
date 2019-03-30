import Observable from "./Observable.js";
//import Calculator from "./Calculator.js";

const CalcModel = class extends Observable {
  constructor() {
    super();
    this.isBegin = true;
    this.calcStack = [];
    this.calcResult = 0;
  }
  init() {
    this.fire({ calcResult: this.calcResult });
    console.log("init Model");
  }
  calc({ buttonType, buttonText }) {
    //console.log("inputKey", buttonType, buttonText);
    const KEY_TYPE = {
      "basic-calc": calcFactor => this.handleBasicCalc(calcFactor),
      "fn-calc": calcFactor => this.handleFnCalc(calcFactor),
      "num-key": calcFactor => this.handleNumCalc(calcFactor)
    };
    KEY_TYPE[buttonType](buttonText);
  }
  handleBasicCalc(calcFactor) {
    this.updateCalcStack(calcFactor);
  }
  hasCalcStack() {
    return this.calcStack.length !== 0;
  }
  updateCalcStack(calcFactor) {
    if (this.hasCalcStack()) {
      this.calcStack.pop();
      this.calcStack.push(calcFactor);
    } else this.calcStack.push(calcFactor);
    console.log("calcStack", this.calcStack);
  }
  handleDivideCalc() {
    this.updateCalcStack(calcFactor);
  }
  handleMultipleCalc() {
    this.updateCalcStack(calcFactor);
  }
  handlePlusCalc(calcFactor) {
    this.updateCalcStack(calcFactor);
  }
  handleFnCalc(calcFactor) {
    const FACTOR_TYPE = {
      AC: () => this.handleAllClear(),
      "+/-": () => this.handlePlusMinus(),
      "%": () => this.handlePercent()
    };
    FACTOR_TYPE[calcFactor]();
    console.log("calcFactor", calcFactor);
  }
  updateResult() {
    this.fire({ calcResult: this.calcResult });
  }
  handleAllClear() {
    this.isBegin = true;
    this.calcResult = 0;
    this.updateResult();
    console.log("init Model");
  }
  handlePercent() {
    this.calcResult = parseFloat(this.calcResult / 100);
    // todo 1.
    // 변화가 되면 updateResult를 계속 실행시키는데
    // 이 부분도 object.defineProperty setter? 이용? | Proxy공부해서 적용해보기
    this.updateResult();
  }
  handlePlusMinus() {
    this.calcResult = parseFloat(this.calcResult * -1);
    this.updateResult();
  }
  handleNumCalc(calcFactor) {
    console.log("calcFactor", calcFactor);
    this.calcResult = parseFloat(`${this.calcResult}${calcFactor}`);
    this.updateResult();
  }
};

export default CalcModel;
