const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2, num3, num4)=>{
    console.log(num1 + num2 + num3 + num4);
})

eventEmitter.emit('tutorial',1,2,3,4);