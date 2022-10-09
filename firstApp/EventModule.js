const EventEmitter = require("events");
const event = new EventEmitter();
event.on("name",() => {
    console.log("Your name is Vinod");
});

event.emit("name",200,"ok");

//event.on must always be above event.emit
// The reason is that emitter objects emit named events that cause
//previously registered listeners to be called. So, an emitter object basically 
// has two main features:
// 1. Registering listeners for named events
// 2. Emitting named events