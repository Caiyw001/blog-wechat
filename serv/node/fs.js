const fs = require('fs');
const path = require('path');

fs.open(path.join(__dirname, 'buffer.js'), 'r', (err, fd) => {
  console.log(fd);
})

fs.readdir(__dirname,(err,files)=>{
  console.log(files)
});

