//alert("JavaScript works!");

// Edward M Murray Jr
// SDI 1209
// Assignment 2
// Fantasy Football Assignment 2

//---Set variables
var adjectives = [ 
	" needs to be picked up.", 
	" also needs a ride.",
	" doesn't have his car, have to pick him up too... "
];
var passengers = "Have all passengers, lets head to the party";
var carHolds = 4,
	carHas = 4;

//---Procedure Function

function goingToParty(peopleGoing){
	if (peopleGoing <= 10) {
		console.log("Looks like less than 10 people are going to the draft party. The party won't be fun with only " + peopleGoing + " people going....") ;
	}else{
		console.log ("Looks like " + peopleGoing + " people are going to the draft party. Do i have room to pick people up on my way?");			
	}
};

//---String Function

function canPickup(string1, string2){
	var seatsAvaialable = 3,
		pickUp;
	pickUp = "Yes, " + string1 + seatsAvaialable + string2;
	return pickUp;
};		

//---Array Function

function peopleToPickup(toPickup, pickUpNames){
for (var i = 0; i < toPickup; i++) {
	console.log ( pickUpNames[i] + adjectives[i]);	
	}
};

//---Number Function

function pickedUp(peopleLeft){
	var gotPass = 0;
	while (peopleLeft > 0) {
		console.log("Picked up " + gotPass + " partygoers. I have " + peopleLeft + " passengers left to pick up");
		peopleLeft--;
		gotPass ++;
	}	
};

//---Boolean Function*/
function getAllPassengers(carHolds, carHas){
	if (carHolds ^ carHas) {
		return true;
	} else {
		return false;
	}
};


//----Main Code - Function calls

//Procedure
goingToParty(11)

//String
var willPickUp = canPickup ("I have room to pick up ", " people on my way");
console.log (willPickUp)

//Array
peopleToPickup (3, ["Kyle", "Jesse", "Joe"])

//Numer
pickedUp (3)

//Boolean
if (canPickup(4,4)) {
	console.log ("All passengers picked up. Let's head to the party!"); 
} else {
	console.log ("Still more passengers to pickup");
}
