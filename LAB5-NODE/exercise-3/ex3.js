const events = require('events');
const eventEmitter = new events.EventEmitter();

let eventHandler = function () {
    console.log('Alarm has been triggered!');
    eventEmitter.emit('call', callFunction)
}

let callFunction = function () {
    console.log('call 911');
}

eventEmitter
    .on('alarm', eventHandler)
    .on('call', callFunction);

eventEmitter.emit('alarm');