/*
Student Name: Lawrence Oladimeji
File Name: script.js
Date: 05/09/2025
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

// Function to display the answer for the first FAQ
function displayAnswer1() {
    var questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = "<p><strong>Answer:</strong> Wild Rescues is a registered nonprofit organization that helps injured, sick, and orphaned wildlife. We rehabilitate these animals and release them back into the wild when possible.</p>";
}

// Function to display the answer for the second FAQ
function displayAnswer2() {
    var questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = "<p><strong>Answer:</strong> We handle a wide variety of animals, including raccoons, squirrels, foxes, birds, horses, deer, pigs, and reptiles. Each animal is treated based on their needs.</p>";
}

// Function to display the answer for the third FAQ
function displayAnswer3() {
    var questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = "<p><strong>Answer:</strong> You can contact us via email or through our phone number. We'll assess the situation and let you know the best way to proceed with helping the animal.</p>";
}

// Function to display the answer for the fourth FAQ
function displayAnswer4() {
    var questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = "<p><strong>Answer:</strong> Yes, Wild Rescues is a part of the National Wildlife Rehabilitators Association, which provides resources and education to improve wildlife rehabilitation practices.</p>";
}
