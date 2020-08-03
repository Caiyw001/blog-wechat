function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

let hw = helloWorldGenerator();

let n1 = hw.next();
let n2 = hw.next();
let n3 = hw.next();
let n4 = hw.return();