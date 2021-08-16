var ip = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var cp = document.querySelector("#current-price");

var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output");

output.style.display = "none";
function calculateResult(initial, noOfStocks, current) {
  // if (initial.length !== 0 && noOfStocks.length !== 0 && current.length !== 0) {
  if (initial < current) {
    var profit = (current - initial) * noOfStocks;
    var profitPercentage = (profit / initial) * 100;

    output.style.display = "block";
    output.style.backgroundColor = "lightblue";
    document.body.style.backgroundColor = "#34eb77";
    output.innerText = `Yay! you made a profit of ${profit} 🏆. And the profit percentage is ${profitPercentage.toFixed(
      2
    )} % 🎯`;
  } else if (initial > current) {
    var loss = (initial - current) * noOfStocks;
    var lossPercentage = (loss / initial) * 100;

    output.style.display = "block";
    output.style.backgroundColor = "pink";
    document.body.style.backgroundColor = "#d42242";
    output.innerText = `Oh! you made a loss  of ${loss} 😿. And the loss percentage is ${lossPercentage.toFixed(
      2
    )} % 📉`;
  } else {
    output.style.display = "block";
    document.body.style.backgroundColor = "orange";
    output.innerText = `You made no profit and loss !!`;
  }
  // }
}

function submitHandler() {
  var initial = Number(ip.value);
  var noOfStocks = Number(quantity.value);
  var current = Number(cp.value);

  calculateResult(initial, noOfStocks, current);
}

submitBtn.addEventListener("click", submitHandler);
