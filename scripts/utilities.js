function getInputValue(id){
    const inputId = parseInt(document.getElementById(id).value);
    return inputId;
}

function getInnerTextById(id){
    initialDonation =  parseInt(document.getElementById(id).innerText);
    return initialDonation;
}