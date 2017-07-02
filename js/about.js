var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
	greeting = 'Good evening!';
} else if (hourNow > 12) {
	greeting = 'Good afternoon!';
} else if (hourNow > 0) {
	greeting = 'Good morning!';
} else {
	greeting = 'Hello';
}
document.write('<p>' + greeting + '</p>');


// Update HTML with property of the object
var hotel = {
	name: 'Quay',
	rooms: 40,
	booked: 25,
	checkAvailability: function () {
		return this.rooms - this.booked; // Need "this" because inside function
	}
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name.toUpperCase(); // Update HTML with property of the object

var elRooms = document.getElementById('rooms'); // Get element
elRooms.textContent = hotel.checkAvailability(); // Update HTML with property of the object


var auto = new Object();
auto.name = "Porsche";

var random = Math.floor((Math.random()*10)+1);
window.alert("hello" + random);
var today = new Date();
window.alert("hello" + today );


function Hotel (hName, hRooms, hBooked) {
	this.hName = hName;
	this.hRooms = hRooms;
	this.hBooked = hBooked;
}

var quayHotel = new Hotel("Quay", 20, 10);
// Set up the object

// Update the HTML

var shape = {
	width: 600,
	heigth: 800,
	getArea: function() {
	return this.width * this.heigth;
		
}
};

var area = shape.getArea();

document.write("<p>" + area + "</p>");

var given = 22;
var colors = ["red", "blue", "yellow"];
var back = 10;
var price = 0;
var paid = given - back;


var paido = document.getElementById("test");
var el = document.getElementById("colors");
colors[1] = "black";


el.textContent = colors[1];
paido.textContent = paid;




for (var i = 0; i < colors.length; i++) {
	price = price + 1;
}


var priceo = document.getElementById("priced");
priceo.textContent = price;


function getColors(wantedNumber) {

	return colors[wantedNumber];
}

var lastColor = getColors(price);

var laster = document.getElementById("last");
laster.textContent = lastColor;
//document.write <"<h3>" + paid +  "</h3>">;