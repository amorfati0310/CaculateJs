import { reduce, curry } from "./fpUtils";

const NumKeys = [...new Array(10).keys()];
const BasicCalcKeys = ["÷", "×", "−", "+"];
const FnCalcKeys = ["AC", "+/-", "%"];
// 1. fnKey -> 적절한 modeKey 생각이 안난다 ... -> 더 좋은 거 있으면 교체
// 2. basicCaclKey
// 3. NumKey

const buttonTemplate = (type, btnText) => `
<li>
    <button class="btn-${type}">${btnText}</button>
</li>
`;
const fnCalcKeyTemplate = curry(buttonTemplate)("fn-calc");
const basicCalcKeyTemplate = curry(buttonTemplate)("basic-calc");
const numKeyTemplate = curry(buttonTemplate)("num-key");

const numKeysTemplate = reduce((acc, val) => (acc += numKeyTemplate(val)), "", NumKeys);

const basicCalcKeysTemplate = reduce((acc, val) => (acc += numKeyTemplate(val)), "", BasicCalcKeys);

const fnCalcKeysTemplate = reduce((acc, val) => (acc += numKeyTemplate(val)), "", FnCalcKeys);

export { numKeysTemplate, basicCalcKeysTemplate, fnCalcKeysTemplate };
