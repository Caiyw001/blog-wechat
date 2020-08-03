const rp = require('request-promise');

console.log(new Date().getTime());
for (let i = 0; i <= 1000; i++) {
  if (i === 1000) console.log(new Date().getTime());
  rp({
    url: 'http://127.0.0.1:9012/api/m/v2/wxuser/login',
    method: 'POST',
    body: {
      unionid: 'od9Es0w9jL_GrY0fq76uaad0dcFw'
    },
    json: true
  }).then(rlt => {
    if (i === 1000)
      console.log(new Date().getTime());
  }).catch(err => {
    console.log(err);
  })
}