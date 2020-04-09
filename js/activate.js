// add JavaScript content here
function askName() {
    var username = prompt ('what is your full name?');
}
return documnet.write('WELCOME' + username);

function getOpenion() {
    var response = prompt ('Do you like hiking?');
    var Message;
}
if (response === 'yes') {
    Message = 'Please recommend the most wondrous hiking spot that visited.';
} else if (response === 'no') {
    Message = 'It is ok, but how many spots do you guess to exist in US?' 
}

return document.write(Message);