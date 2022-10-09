const os=require('os');
var platform=os.platform();
console.log(`Release:${platform}`);
var uptime=os.uptime();
console.log(`Uptime:${uptime}`);