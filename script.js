/*
Excercise 1 - Show current day and time info
*/

let today = new Date();

let day = today.getDay();
let dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satureday'];

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();

let prepend = hour > 12 ? 'PM' : 'AM';
hour = hour > 12 ? (hour - 12) : hour;

function addDiv (string) {
    let newDiv = document.createElement('div');
    newDiv.innerHTML = string;
    document.body.appendChild(newDiv);
}

document.body.onload = addDiv(`Today is : ${dayList[day]}`);
document.body.onload = addDiv(`Current time is : ${hour} ${prepend} : ${min} : ${sec}`)

/* ------DONE------ */