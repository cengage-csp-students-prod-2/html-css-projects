/*
Student Name: Lawrence Oladimeji
File Name: script.js
Date: 05/12/2025
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
		var menuicon = document.getElementById("icon");
		if (navlinks.style.display === "block") {
		    navlinks.style.display = "none";
				menuicon.style.color = "#2a1f14";
		} else {
		    navlinks.style.display = "block";
				menuicon.style.color = "#f6eee4";
		}
}

// script.js

function ans1() {
    document.getElementById("answer").innerHTML = "<p>If you see a baby animal alone, observe from a distance. The parent may be nearby. If the animal is injured or in danger, contact a licensed wildlife rehabilitator.</p>";
}

function ans2() {
    document.getElementById("answer").innerHTML = "<p>Signs of rabies in animals may include unusual aggression, confusion, or drooling. Never approach a potentially rabid animal—contact animal control immediately.</p>";
}

function ans3() {
    document.getElementById("answer").innerHTML = "<p>No, birds have a poor sense of smell and will not abandon their baby if touched. It’s safe to return the baby bird to its nest if it’s uninjured.</p>";
}

function ans4() {
    document.getElementById("answer").innerHTML = "<p>You can volunteer by visiting our contact page and submitting a volunteer form. We will reach out with available opportunities and training requirements.</p>";
}
