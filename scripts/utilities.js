function getInputValue(id){
    const inputId = parseInt(document.getElementById(id).value);
    return inputId;
}

function getInnerTextById(id){
    initialDonation =  parseInt(document.getElementById(id).innerText);
    return initialDonation;
}

// Button Toggle
function btnToggle(id){
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    // Toggle
    document.getElementById(id).classList.remove('hidden');
}
// Current Time
function getCurrentDateTime() {
    const now = new Date();
    return now.toString(); // This will return the full date format
}

// Function to handle button clicks
function activateButton(button) {
    btn1.classList.remove("active");
    btn1.classList.remove("active");

    // Add 'active' class
    button.classList.add("active");
}