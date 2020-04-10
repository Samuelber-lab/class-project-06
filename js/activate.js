// add JavaScript content here
function askName() {
    var username = prompt ('what is your full name?');
    return document.write('WELCOME ' + username + '!');
}

function getOpenion() {
    var response = prompt ('Do you like hiking?');
    var response;

if (response === 'yes') {
    var response = prompt ('Please recommend the most wondrous hiking spot that visited.');
    var response;
} else if (response === 'no') {
    var response = prompt ('It is ok, but how many spots do you think to exist in US?');
    var response; 
}
}

function getSuggestion() {
    var reflection = prompt ('Do you think precaution has to be taken before every hiking attempt?');
    var reflection;

if (reflection === 'yes') {
    return document.write('Awesome and thank you for sharing your openion!!'); 
} else if (reflection === 'no') {
    return document.write('Thank you for sepending your time in going through the suggetion process!'); 
}
}