// Function to display the answer for the first question
function displayAnswer1() {
    // Get the div with the id 'answer'
    const answerDiv = document.getElementById('answer');

    // Set the content inside the 'answer' div
    answerDiv.innerHTML = `
        <h3>What is Wild Rescues?</h3>
        <p>Wild Rescues is a registered nonprofit wildlife rescue and rehabilitation facility located in Ocala, Florida. We help injured, sick, neglected, and orphaned wildlife. Our mission is to rehabilitate these animals and release them back into the wild whenever possible.</p>
    `;
}

// Function to display the answer for the second question
function displayAnswer2() {
    const answerDiv = document.getElementById('answer');
    answerDiv.innerHTML = `
        <h3>What animals do you help?</h3>
        <p>We help a variety of animals, including but not limited to:</p>
        <ul>
            <li>Raccoons</li>
            <li>Squirrels</li>
            <li>Foxes</li>
            <li>Birds</li>
            <li>Horses</li>
            <li>Deer</li>
            <li>Pigs</li>
            <li>Reptiles</li>
        </ul>
    `;
}

// Function to display the answer for the third question
function displayAnswer3() {
    const answerDiv = document.getElementById('answer');
    answerDiv.innerHTML = `
        <h3>How can I report an injured or orphaned animal?</h3>
        <p>If you find an injured or orphaned animal, please contact us immediately. You can call us at <strong>(555) 123-4567</strong>, or send an email to <a href="mailto:info@wildrescues.net">info@wildrescues.net</a> for assistance.</p>
    `;
}

// Function to display the answer for the fourth question
function displayAnswer4() {
    const answerDiv = document.getElementById('answer');
    answerDiv.innerHTML = `
        <h3>Are you a member of any wildlife organizations?</h3>
        <p>Yes, Wild Rescues is a proud member of the National Wildlife Rehabilitators Association (NWRA). We work closely with other wildlife rescue organizations to share knowledge and resources for the best care and rehabilitation of animals.</p>
    `;
}
