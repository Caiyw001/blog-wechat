function main(obj) {
  for (let key in obj) {
    if (typeof (obj[key]) === 'object') {
      main(obj[key]);
    }
    let key_ = convet_(key);
    if (key_) {
      obj[key_] = obj[key];
      delete obj[key];
    }
  }
}

function convet_(key) {
  let keys = key.match(/[A-Z]/g);
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      key = key.replace(keys[i], `_${keys[i]}`)
    }
    return key.toLowerCase();
  }
  return null;
}

let o = {
  studentName: 'cyw',
  studentAge: 29,
  student: {
    studentCode: '20111',
    studentPhone: '15811134129'
  }
}

main(o);
console.log(o);