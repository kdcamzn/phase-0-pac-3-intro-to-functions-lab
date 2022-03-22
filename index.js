
const string = "Hello!";

function shout(string) {
    return string.toUpperCase();
}
console.log(shout("Hello!"));


function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper);


function logShout(string) {
    console.log(string.toUpperCase());
}
console.log(logShout);

function logWhisper(string) {
    console.log(string.toLowerCase());
}
console.log(logWhisper);

function sayHiToHeadphonedRoommate(string) {
    
    if (string.toLowerCase() === string) {
        return ("I can\'t hear you!")
    }
    if (string.toUpperCase() === "HELLO") {
        return ("YES INDEED!")
    }
    else if (string === "Let\'s have dinner together!") {
        return ("I would love to!")}
}
sayHiToHeadphonedRoommate("Let\'s have dinner together!")