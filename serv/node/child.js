const os = require('os');

console.log(JSON.stringify(os.cpus()));

console.log(os.freemem());

console.log(JSON.stringify(os.networkInterfaces()));

console.log(os.loadavg());

console.log(process.memoryUsage());

