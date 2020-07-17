// feetToMile
function feetToMile(feet){
    var mile = feet * 0.000189394;
    return mile; 
}
// feetToMile

// woodCalculator
var result = woodCalculator(12, 12, 15);
function woodCalculator(chair, table, bad){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var badCount = bad * 5;
    var totalKhat = (chairCount + tableCount + badCount);
    return totalKhat;
}
// woodCalculator

// brickCalculator
function brickCalculator(aptMan){
    if(aptMan <= 10){
        var feet10 = aptMan * 15;
        var brick = feet10 * 1000;
    }
    else if(aptMan <= 20){
        var feet20 = aptMan * 12;
        var brick = feet20 * 1000;
    }
    else if(aptMan > 20){
        var feet30 = aptMan * 10;
        var brick = feet30 * 1000;
    }
    return brick; 
}
var first = brickCalculator(8);
console.log(first);
// brickCalculator


// tinyFriend
function tinyFriend(names){
    let smallFriend = names[0];
    for(let i = 0; i < names.length; i++){
        let newName = names[i];
        if(newName < smallFriend){
            smallFriend = newName;
        }
    }
    return smallFriend;
}
// tinyFriend
