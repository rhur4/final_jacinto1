// creates variables to hold information
var beastNum
//set values to the variables
beastNum = 18;
// get the info from an id
var gogo = document.getElementById('numAdjust');
// replace the content of this element
gogo.innerText = beastNum;
// --------------------------------------------------
//verifies whether the user wants to learn about mythical beasts, which is the topic of the site.
let accessAllowed;
let gate = prompt('Do you want to learn about Mythological Beasts? (Y or N)','');

if(gate == 'Y'){
    accessAllowed = true;
    message = 'Welcome!';
    alert(message);
} 
else if(gate == 'y'){
    accessAllowed = true;
    message = 'Welcome!';
    alert(message);
} 
else{
    accessAllowed = false;
    message = 'Aw man!';
    alert(message);
}
// --------------------------------------------
// gives out a secret message to people who wander the console log.
function secretMessage(){
    return "Mythical Beasts are cool!"
}
console.log(secretMessage())


