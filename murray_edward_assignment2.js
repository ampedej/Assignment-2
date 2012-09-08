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
var haveAll = "Have all passengers, lets head to the party",
	dontHaveAll = "Still more passengers to be picked up"
;
var seatsAvaialable = 3;

//---Procedure Function

function goingToParty(peopleGoing){
	if (peopleGoing <= 10) {
		console.log("Looks like less than 10 people are going to the draft party. The party won't be fun with only " + peopleGoing + " people going....") ;
	}else{
		console.log ("Looks like " + peopleGoing + " people are going to the draft party. Do i have room to pick people up on my way?");			
	}
};

//---String Function

function canPickup(haveRoom, people){
	var pickUp;
	pickUp = "Yes, " + haveRoom + seatsAvaialable + people;
	return pickUp;
};		

//---Array Function

function peopleToPickup(toPickup, pickUpNames){
	var pickUpNamesLen = pickUpNames.length;
	for (var i = 0; i < pickUpNamesLen; i++) {
	console.log ( pickUpNames[i] + adjectives[i]);	
	}
};

//---Number Function

function pickedUp(peopleLeft){
	var gotPass = 0;
	while (peopleLeft > 0) {
		console.log("Picked up " + gotPass + " partygoers. I have " + peopleLeft + " passengers left to pick up");
	peopleLeft = peopleLeft-1;
	gotPass ++
}
	return peopleLeft;
};

//---Boolean Function*/
function getAllPassengers(carHas, carHolds){
	if (carHas != carHolds) {
		return dontHaveAll;
	} else {
		return haveAll;
	}
};


//----Main Code - Function calls

//Procedure
goingToParty(11)

//String
var willPickUp = canPickup ("I have room to pick up ", " people on my way");
console.log (willPickUp)

//Array
peopleToPickup(0, ["Kyle", "Jesse", "Joe"])

//Number
var test = pickedUp(3)
console.log("Picked up 3 passengers. I have " + test + " people left to pick up");

//Boolean
var passengers = getAllPassengers(4,4);
console.log (passengers);
