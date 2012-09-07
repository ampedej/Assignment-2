//alert("JavaScript works!");

// Edward M Murray Jr
// SDI 1209
// Assignment 2
// Fantasy Football Assignment 2

//---Set variables

var seatsAvaialable = 3;
var passengers = "Have all passengers, lets head to the party";

//---Procedure Function

function goingToParty(peopleGoing){
	if (peopleGoing <= 10) {
		partyFun = "Looks like less than 10 people are going to the draft party. The party won't be fun with only " + peopleGoing + " people going...." ;
	}else{
		partyFun = "Looks like " + peopleGoing + " people are going to the draft party. Do i have room to pick people up on my way?";			
	}
	return(partyFun);
};

//---String Function

function canPickup(haveRoom, noRoom){
	var pickUp = "yes";
		if (pickUp === "yes") {
			console.log ("Yes! " + haveRoom);
		} else {
			console.log ("No " + noRoom);
	}
}

//---Array Function

function peopleToPickup (toPickup, pickUpNames){
	var adjectives = [ 
	" needs to be picked up.", 
	" also needs a ride.",
	" doesn't have his car, have to pick him up too... "
];
for (var i = 0; i < toPickup; i++) {
	console.log ( pickUpNames[i] + adjectives[i]);	
	}
};

//---Number Function

function pickedUp (peopleLeft){
	var gotPass = 0;
	while (peopleLeft > 0) {
		console.log("Picked up " + gotPass + " partygoers. I have " + peopleLeft + " passengers left to pick up");
		peopleLeft--;
		gotPass ++;
	}
	//console.log("All passengers picked up. Let's head to the party!")	
};

//---Boolean Function*/
function allPassengers (haveAll, dontHaveAll) {
	var all = true; {
	if (all = true) {
		console.log (haveAll);
	} else {
		console.log (dontHaveAll);
	}
}
};
	

//----Main Code - Function calls

console.log (goingToParty(11));
canPickup ("I have room to pick up " + seatsAvaialable + " people up on my way.", "i don't have any room")
peopleToPickup (3, ["Kyle", "Jesse", "Joe"])
pickedUp (3)
allPassengers (passengers)