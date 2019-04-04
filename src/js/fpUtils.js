const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const val of iter) {
    acc = f(acc, val);
  }
  return acc;
};

const curry = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));
// rCurry

const add = curry((a, b) => {
  return parseFloat(a) + parseFloat(b);
});

const substract = curry((a, b) => {
  return parseFloat(a) - parseFloat(b);
});

const multiple = curry((a, b) => {
  return parseFloat(a) * parseFloat(b);
});

const divide = curry((a, b) => {
  return parseFloat(a) / parseFloat(b);
});

const DMath = {
  add,
  substract,
  multiple,
  divide
};

export { reduce, curry, DMath };
