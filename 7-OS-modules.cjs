const os = require('os');

// info about current user
const user = os.userInfo();
console.log(user);

// method to know the uptime of out computer
console.log(`The uptime of our computer is ${os.uptime()}`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs);