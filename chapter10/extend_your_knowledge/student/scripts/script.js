/*
    Student Name: Lawrence Oladimeji
    File Name: script.js
    Date: 05/05/2025
*/

// Function to hide paragraphs within the article
function remove() {
    $("#main p").hide();
}

// Function to show paragraphs within the article
function display() {
    $("#main p").show();
}

// Attach event handlers to the buttons once the DOM is loaded
$(document).ready(function() {
    $("#hideBtn").click(remove);
    $("#showBtn").click(display);
});
