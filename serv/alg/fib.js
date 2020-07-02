//1 1 2 3 5
let args=process.argv;
let num=Number(args[2]);

const tmp = {};
function fib(n) {
  if (tmp[n]) return tmp[n];
  if (n === 1 || n === 2) return 1;
  tmp[n] = fib(n - 1) + fib(n - 2);
  return tmp[n];
}


function sumfib(n) {
  if (n === 1 || n === 2) return n;
  return sumfib(n - 1) + fib(n);
}

console.log(sumfib(num));