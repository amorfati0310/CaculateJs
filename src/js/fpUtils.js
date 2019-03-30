

const reduce = (f, acc, iter )=>{
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for(const val of iter){
        acc = f(acc, val)
    }
    return acc;
};


const curry = f => ( a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);
// rCurry

export {
    reduce,
    curry
}