import { reduce, curry } from "./fpUtils";
// 0 ~ 9
const nums = [...new Array(10).keys()]
  .reverse()
  .slice(0, 9)
  .concat([".", "0"]);
const NumKeys = nums;
const BasicCalcKeys = ["÷", "×", "−", "+", "="];
const FnCalcKeys = ["AC", "+/-", "%"];
// 1. fnKey -> 적절한 modeKey 생각이 안난다 ... -> 더 좋은 거 있으면 교체
// 2. basicCaclKey
// 3. NumKey

const buttonTemplate = (type, btnText) => `
<li>
    <button 
    class="btn-${type}"
    data-type="${type}"
    >${btnText}</button>
</li>
`;
const fnCalcKeyTemplate = curry(buttonTemplate)("fn-calc");
const basicCalcKeyTemplate = curry(buttonTemplate)("basic-calc");
const numKeyTemplate = curry(buttonTemplate)("num-key");

const numKeysTemplate = reduce((acc, val) => (acc += numKeyTemplate(val)), "", NumKeys);

const basicCalcKeysTemplate = reduce((acc, val) => (acc += basicCalcKeyTemplate(val)), "", BasicCalcKeys);

const fnCalcKeysTemplate = reduce((acc, val) => (acc += fnCalcKeyTemplate(val)), "", FnCalcKeys);

export { numKeysTemplate, basicCalcKeysTemplate, fnCalcKeysTemplate };
