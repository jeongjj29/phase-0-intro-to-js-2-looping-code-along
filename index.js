// Code your solutions in this file
function writeCards(names, eventName) {
    const greetings = [];
    for (let i = 0; i < names.length; i++) {
        greetings.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return greetings;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number--;
    }
}