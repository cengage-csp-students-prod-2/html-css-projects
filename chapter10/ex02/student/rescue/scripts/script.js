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

function ans1() {
    document.querySelector("#answer p").textContent = 
        "If the baby is warm, has a full belly, and is not crying, the mother is likely nearby. Observe from a distance before interfering.";
}

function ans2() {
    document.querySelector("#answer p").textContent = 
        "Common signs of rabies include excessive drooling, aggression, and strange behavior. Do not approach and call animal control.";
}

function ans3() {
    document.querySelector("#answer p").textContent = 
        "No, birds do not abandon their babies due to human scent. Gently return the baby to the nest if it is safe to do so.";
}

function ans4() {
    document.querySelector("#answer p").textContent = 
        "Visit our Contact Us page to fill out a volunteer form. We’ll be in touch with opportunities.";
}
