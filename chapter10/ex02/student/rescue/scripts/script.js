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

// Function to answer question 1
function ans1() {
    document.getElementById("answer").innerHTML = 
        "<p>Not all alone animals are orphans. Observe from a distance. If you don’t see a parent for several hours, call a licensed wildlife rehabilitator before intervening.</p>";
}

// Function to answer question 2
function ans2() {
    document.getElementById("answer").innerHTML = 
        "<p>Rabid animals may show unusual aggression, confusion, excessive drooling, or paralysis. Keep your distance and contact animal control immediately.</p>";
}

// Function to answer question 3
function ans3() {
    document.getElementById("answer").innerHTML = 
        "<p>No, birds have a limited sense of smell and will not reject their baby if touched by humans. Gently return the bird to its nest if safe.</p>";
}

// Function to answer question 4
function ans4() {
    document.getElementById("answer").innerHTML = 
        "<p>You can volunteer by filling out the application form on our Contact Us page or emailing us at volunteer@wildrescues.net.</p>";
}