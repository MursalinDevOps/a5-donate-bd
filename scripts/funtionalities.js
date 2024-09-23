// Noakhali
document.getElementById("donate-btn1").addEventListener("click", function (e) {
    e.preventDefault();
    const donateAmount = getInputValue("donate-field1");
    const initialDonation = getInnerTextById("noakhali-donation");
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );

    if (donateAmount > availableBalance) {
        alert("Insufficient Balance, Add money and try again.");
        return;
    }
    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Invalid donate amount. Try again.");
    } else {
        // Update the Donation Amount
        document.getElementById("noakhali-donation").innerText =
            initialDonation + donateAmount;
        //   Update the Available Amount
        document.getElementById("available-balance").innerText =
            availableBalance - donateAmount;
    }
});
//   Feni

document.getElementById("donate-btn2").addEventListener("click", function (e) {
    e.preventDefault();
    const donateAmount = getInputValue("donate-field2");
    const initialDonation = getInnerTextById("feni-donation");
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    );

    if (donateAmount > availableBalance) {
        alert("Insufficient Balance, Add money and try again.");
        return;
    }
    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Invalid donate amount. Try again.");
    } else {
        // Update the Donation Amount
        document.getElementById("feni-donation").innerText =
            initialDonation + donateAmount;
        //   Update the Available Amount
        document.getElementById("available-balance").innerText =
            availableBalance - donateAmount;
    }
});
// Quota Movement
document.getElementById('donate-btn3').addEventListener('click', function (e) {
    e.preventDefault();
    const donateAmount = getInputValue('donate-field3');
    const initialDonation = getInnerTextById('quota-donation');
    const availableBalance = parseInt(
        document.getElementById("available-balance").innerText
    ); 

    if (donateAmount > availableBalance) {
        alert("Insufficient Balance, Add money and try again.");
        return;
    }
    if (isNaN(donateAmount) || donateAmount < 0) {
        alert("Invalid donate amount. Try again.");
    } else {
        // Update the Donation Amount
        document.getElementById("quota-donation").innerText =
            initialDonation + donateAmount;
        //   Update the Available Amount
        document.getElementById("available-balance").innerText =
            availableBalance - donateAmount;
    }

});

//   Toggle

// document.getElementById("btn-donation").addEventListener("click", function () {
//     btnToggle("card-section");
//   });
//   document.getElementById("btn-history").addEventListener("click", function () {
//     btnToggle("history-section");
//   });

// document.getElementById('btn-history').addEventListener('click', function(){
//     document.getElementById('history-section').classList.remove('hidden');
//     document.getElementById('card-section').classList.add('hidden');

// });

// document.getElementById('btn-donation').addEventListener('click', function(){
//     document.getElementById('card-section').classList.add('hidden');
//     document.getElementById('history-section').classList.add('hidden');
// })

//   History Section

const place = document.getElementById("noakhali").innerText;
const currentDateTime = getCurrentDateTime();

document.getElementById("history-section").innerHTML += `

<div id="history-contents" class="border border-2 flex flex-col justify-center lg:w-[1152px] lg:h-[136px] p-4 my-8 rounded-xl mx-auto">
          <h3>${donateAmount} Taka is donated for ${place}</h3>
 <h3>Time: ${currentDateTime}</h3>
        </div>
`;
