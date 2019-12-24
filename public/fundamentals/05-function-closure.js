console.groupCollapsed("Partial Apply");
//partial apply
const partialApply = (fn, ...fixedArgs) => {
  return function(...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};

const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
console.log(add10(5));
console.groupEnd();

console.groupCollapsed("Curry");
//curring
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};
const g = n => n + 1;
const f = n => n * 2;
const h = pipe(
  g,
  trace("after g"),
  f,
  trace("after f")
);
h(20);
console.groupEnd();

//curry real world example with RxJs -  https://stackblitz.com/edit/typescript-3xykpb?file=index.ts&devtoolsheight=100