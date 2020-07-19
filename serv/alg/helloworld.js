const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function (req) {
  let rlt = min_num(req);
  console.log(rlt);
  rl.close();

}).on('close', function () {
  process.exit(0);
});

function min_num(str) {
  let num_arr = str.match(/(\d+)/g);
  let tmp = str.split('-');
  let sumTmp = 0;
  let sumMaxIndex = num_arr.length;
  if (tmp.length !== 1) {
    let sum_arr = tmp[0].match(/(\d+)/g);
    sumMaxIndex = sum_arr.length;
  }

  for (let i = 0; i < num_arr.length; i++) {
    if (i < sumMaxIndex) {
      sumTmp += Number(num_arr[i]);
    } else {
      sumTmp -= Number(num_arr[i]);
    }
  }
  return sumTmp;
}



let tmp_num = 0;
let str = '';

function isSuccess(str) {
  let R_count = 0, L_count = 0, S_count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'R') R_count++;
    if (str[i] === 'L') L_count++;
    if (str[i] === 'S') S_count++;
  }
  if (S_count === 0) return 'no';
  let diff = Math.abs(R_count - L_count);
  if (diff === 0) return 'yes';
  if (diff % 5 === 0) return 'no';
  return 'yes';
}



// 拨号问题
const dic = [
  [1, 0],
  [0, 3],
  [1, 3],
  [2, 3],

  [0, 2],
  [1, 2],
  [2, 2],

  [0, 1],
  [1, 1],
  [2, 1]
]


function getMinNum(str) {
  str = '5' + str;
  let len = 0;
  for (let i = 1; i < str.length; i++) {
    let tmp_befor = Number(str[i - 1]);
    let tmp = Number(str[i]);
    if (tmp_befor === tmp) continue;
    let diff_x = Math.abs(dic[tmp][0] - dic[tmp_befor][0]);
    let diff_y = Math.abs(dic[tmp][1] - dic[tmp_befor][1]);
    len += diff_x + diff_y;
  }
  return len;
}


// 斐波拉契数列问题
const map = {};
function fib(n) {
  if (map[n]) return map[n];
  if (n === 1 || n === 2) return 1;
  tmp = fib(n - 1) + fib(n - 2);
  if (tmp >= 1000000) {
    tmp = tmp % 1000000;
  }
  map[n] = tmp;
  return map[n];
}


// 检查2的n次幂
function checkoutNum(num) {
  if (num === 2 || num === 1) return 1;
  if (num % 2 !== 0) return 0;
  return checkoutNum(num / 2);
}