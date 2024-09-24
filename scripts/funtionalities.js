// Noakhali
document.getElementById("donate-btn1").addEventListener("click", function (e) {
    e.preventDefault();
    const donateAmount = getInputValue("donate-field1");
    const initialDonation = getInnerTextById("noakhali-donation");
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );
    updateHistory(donateAmount, "Donate for Flood at Noakhali, Bangladesh");
    if (donateAmount > availableBalance) {
        alert("Insufficient Balance, Add money and try again.");
        return;
    }
    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Invalid donate amount. Try again.");
        return;
    }
    // Update the Donation Amount
    document.getElementById("noakhali-donation").innerText =
        initialDonation + donateAmount;
    //   Update the Available Amount
    document.getElementById("available-balance").innerText =
        availableBalance - donateAmount;
    //   Show Modal on successful submission
    my_modal_1.showModal();
});
//   Feni

document.getElementById("donate-btn2").addEventListener("click", function (e) {
    e.preventDefault();
    const donateAmount = getInputValue("donate-field2");
    const initialDonation = getInnerTextById("feni-donation");
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );
    updateHistory(donateAmount, "Donate for Flood at Feni, Bangladesh");
    if (donateAmount > availableBalance) {
        alert("Insufficient Balance, Add money and try again.");
        return;
    }
    // Validation: Invalid amount
    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Invalid donate amount. Try again.");
        return;
    }
    // Update the Donation Amount
    document.getElementById("feni-donation").innerText =
        initialDonation + donateAmount;
    //   Update the Available Amount
    document.getElementById("available-balance").innerText =
        availableBalance - donateAmount;
    //   Show Modal on successful submission
    my_modal_1.showModal();
});
// Quota Movement
document.getElementById("donate-btn3").addEventListener("click", function (e) {
    e.preventDefault();
    const donateAmount = getInputValue("donate-field3");
    const initialDonation = getInnerTextById("quota-donation");
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );
    updateHistory(donateAmount, "Aid for Injured in the Quota Movement");

    // Validation: Insufficient balance
    if (donateAmount > availableBalance) {
        alert("Insufficient Balance, Add money and try again.");
        return;
    }

    // Validation: Invalid amount
    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Invalid donate amount. Try again.");
        return;
    }

    // Successful donation - Update values and show modal
    document.getElementById("quota-donation").innerText =
        initialDonation + donateAmount;

    document.getElementById("available-balance").innerText =
        availableBalance - donateAmount;

    //   Show Modal on successful submission
    my_modal_1.showModal();
});

//   Toggle
document.getElementById("btn-history").addEventListener("click", function () {
    btnToggle("history-section"); // Show the history section
});

document.getElementById("btn-donation").addEventListener("click", function () {
    btnToggle("card-section"); // Show the donation section
});

// Function to update the history section with a new donation entry
function updateHistory(donateAmount, place) {
    const currentDateTime = getCurrentDateTime();
    document.getElementById("history-section").innerHTML += `
        <div id="history-contents" class="border border-2 flex flex-col justify-center lg:w-[1152px] lg:h-[136px] p-4 my-8 rounded-xl mx-auto">
            <h3 class="px-4">${donateAmount} Taka is donated to ${place}</h3>
            <h3 class="px-4 bg-gray-100 rounded-xl">Date: ${currentDateTime}</h3>
        </div>
    `;
}

// Active/Inactive status

const btn1 = document.getElementById("btn-donation");
const btn2 = document.getElementById("btn-history");

// Event listeners for the buttons
btn1.addEventListener("click", function () {
    activateButton(btn1);
    btn2.classList.remove("bg-[#B4F461]");
    btn1.classList.add("bg-[#B4F461]");
});

btn2.addEventListener("click", function () {
    activateButton(btn2);
    btn1.classList.remove("bg-[#B4F461]");
    btn2.classList.add("bg-[#B4F461]");
});
