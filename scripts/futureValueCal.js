"use strict"
console.log("code is running inside futureValueCal.js");

window.onload = function init() {

    //look through the HTML document for something with the id of futureValueForm and store it in
    //a variable
    const futureValueForm = document.querySelector("#futureValueForm");
    

    //bind some function to an event for the submission of the form
    futureValueForm.addEventListener("submit", calcFutureValue);
}

//functions taht will do the heavy lifting based on events
function calcFutureValue(event) {
    event.preventDefault();

    //pull the information out of the form for me to use
    const deposit = Number(document.querySelector("#deposit").value);
    const interestRate = Number(document.querySelector("#interestRate").value);
    const years = Number(document.querySelector("#years").value);

    //futureValue = deposit * (1+ interestRate) ** years;
    const futureValue = deposit * (1 + interestRate / 100) ** years;
    const interestEarned = futureValue - deposit;


    let resultsDiv = document.querySelector("#resultsDiv");
    resultsDiv.innerHTML = `
    If you deposit <span class="fw-bold">$$ in a CD that earns 1.75% interest and matures in 5 years, 
    your CD's ending balance will be $1,092.62 and you would have earned $92.62 in interest
    `;

}
