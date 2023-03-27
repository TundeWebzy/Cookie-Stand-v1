let user = prompt ("Hi my name is Babatunde, what is your name?");

console.log("Hi " + user);

let time = prompt("Hi " + user + ", what hour is it? (0 - 24)");

let message;

if (time < 12) {
    message = "Good morning " + user;
} else if (time <= 18) {
    message "Good afternoon " + user;
} else if (time <24) {
    message = "Good night " + user;
} else {
    message + "That hour does not exist " + user;
} 

console.log(message);



