const sinon = 'sinon';
let spy = 'spy';

const names = ["Guadalupe", "Ollie", "Aki"]; 
const eventName = "surprise";
let message = [];

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++){
     const newMessage = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    message.push(newMessage);
    }
    return message;
}


function countDown(number) {
    let i = 10;
while (i >= 0)
    console.log(i--);
}


