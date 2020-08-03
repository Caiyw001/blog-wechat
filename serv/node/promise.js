let p1 = new Promise((resolve, reject) => {
  resolve(1);
})

let p2 = new Promise((resolve, reject) => {
  resolve(2);
})

let p3 = new Promise((resolve, reject) => {
  resolve(3);
})

let p4 = new Promise((resolve, reject) => {
  resolve(4);
})

let rlt = Promise.race([p1, p2, p3, p4]);
rlt.then(r => {
  console.log(r)
}).catch(err => {
  console.log(err);
})