function displayMessage() {
	alert("Hello, world!");
}

function sayHello() {
	let name = document.getElementById("nameInput").value;
	if (name == "") {
		alert("Please enter your name.");
	} else {
		alert("Hello, " + name + "!");
	}
}
