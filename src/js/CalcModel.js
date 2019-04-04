import Observable from "./Observable.js";
//import Calculator from "./Calculator.js";
import { DMath } from "./fpUtils";

const CalcModel = class extends Observable {
  constructor() {
    super();
    this.isBegin = true;
    this.operatorStack = [];
    this.calcResult = 0;
    this.numStack = [];
    this.calcStack = [];
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
    console.log("handle basic", calcFactor);
    if (!this.hasNumStack()) return;

    this.updateOperatorStack(calcFactor);
  }
  hasOperatorStack() {
    return this.operatorStack.length !== 0;
  }
  updateOperatorStack(calcFactor) {
    if (this.hasOperatorStack()) {
      this.operatorStack.pop();
      this.operatorStack.push(calcFactor);
    } else this.operatorStack.push(calcFactor);
    console.log("operatorStack", this.operatorStack);
  }
  handleFnCalc(calcFactor) {
    const FACTOR_TYPE = {
      AC: () => this.handleAllClear(),
      C: () => this.handleClear(),
      "+/-": () => this.handlePlusMinus(),
      "%": () => this.handlePercent()
    };
    FACTOR_TYPE[calcFactor]();
    console.log("calcFactor", calcFactor);
  }
  handleClear() {
    this.setClearValue();
    this.updateView();
  }
  setClearValue() {
    this.isBegin = true;
    this.calcResult = 0;
  }
  updateView() {
    this.fire({ isBegin: this.isBegin });
    this.updateResult({ calcResult: this.calcResult });
  }
  updateResult() {
    this.fire({ calcResult: this.calcResult });
  }
  handleAllClear() {
    this.isBegin = true;
    this.calcResult = 0;
    this.operatorStack = [];
    this.numStack = [];
    this.calcStack = [];
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
  hasNumStack() {
    return this.numStack.length !== 0;
  }
  isNeedCalc() {
    return this.hasNumStack() && this.hasNumStack();
  }
  doCalc(num) {
    const lastNum = this.numStack.pop();
    const operator = this.operatorStack[this.operatorStack.length - 1];
    const operatorType = {
      "+": DMath.add,
      "-": DMath.substract,
      "÷": DMath.multiple,
      "×": DMath.divide
    };
    return operatorType[operator](lastNum, num);
  }
  setBeginState(state) {
    this.isBegin = state;
  }
  handleNumCalc(num) {
    // num Stack 이 없다면 시작을 안 한 상태
    if (!this.hasNumStack()) {
      this.setBeginState(false);
      this.fire({ isBegin: this.isBegin });
    }

    console.log("calcFactor", num);
    if (this.hasOperatorStack()) {
      // 계산을 위해 저장한다.
      this.numStack.push(this.calcResult);
    }
    if (this.isNeedCalc()) {
      const result = this.doCalc(num);
      this.calcStack.push(result);
      this.calcResult = parseFloat(num);
    } else {
      this.calcResult = parseFloat(`${this.calcResult}${num}`);
    }
    this.updateResult();
  }
};

export default CalcModel;
