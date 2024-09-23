

document.getElementById("donate-btn1").addEventListener("click", function (e) {
  e.preventDefault();
  const donateAmount1 = getInputValue("donate-field1");
  const donateAmount2 = getInputValue("donate-field2");
  const initialDonation = getInnerTextById("noakhali-donation");
  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  if (donateAmount1 > availableBalance) {
    alert("Insufficient Balance, Add money and try again.");
    return;
  };
  if (isNaN(donateAmount1) || donateAmount1 < 0) {
    alert("Invalid donate amount. Try again.");
  } else {
    // Update the Donation Amount
    document.getElementById("noakhali-donation").innerText =
      initialDonation + donateAmount1;
    //   Update the Available Amount
    document.getElementById("available-balance").innerText =
      availableBalance - donateAmount1;
  };







//   History Section
  const place = document.getElementById('noakhali').innerText;
  
  document.getElementById('history-contents').innerHTML = `
 <h3>${donateAmount} Taka is donated for ${place}</h3>
 <br>
 <h3>Time</h3>
`
});
