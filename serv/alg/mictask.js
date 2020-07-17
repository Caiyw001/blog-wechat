new Promise((r, j) => {
  console.log(1);
  r(1);
}).then(() => {
  console.log(2);
})

new Promise((r, j) => {
  console.log(3);
  r(1);
}).then(() => {
  console.log(4);
})

new Promise((r, j) => {
  console.log(5);
  r(1);
}).then(() => {
  console.log(6);
})