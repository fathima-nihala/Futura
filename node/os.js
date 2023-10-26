const { log } = require('console');
var os=require('os')

console.log(os.type());
console.log(os.arch()); //bit
console.log(os.release());
console.log(os.version()); //windows 10
console.log(os.uptime()); //time
console.log(os.userInfo());
console.log(os.totalmem());  //ram
console.log(os.freemem()); //ram
console.log(os.cpus()); //cpu
console.log(os.networkInterfaces()); //network
