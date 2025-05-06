/*
    Student Name: Lawrence Oladimeji
    File Name: script.js
    Date: 05/05/2025
*/
var figElement = document.getElementById("placeholder");  
var imgSource = document.getElementById("image");  
var figCap = document.querySelector("figcaption");
// Function to display the first picture
function pic1() {
    imgSource.src = "images/trunk-bay.jpg";
    imgSource.alt = "Elevated view of Trunk Bay beach on St. John";
    figElement.style.display = "block";
    figCap.textContent = "Trunk Bay in St. John";
}

// Function to display the second picture
function pic2() {
    imgSource.src = "images/sanjuan.jpg";
    imgSource.alt = "Elevated view of San Juan coast";
    figElement.style.display = "block";
    figCap.textContent = "Coast of San Juan";
}