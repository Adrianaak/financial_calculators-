"use strict"

let loanAmount = 32174;
let interestRate = 8.65;
let loanTermMonths = 12;

// Prevent form submission
document.querySelector('mortgageForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // Get form inputs
    const loanAmount = parseFloat(document.querySelector('loanAmount').value);
    // Monthly interest rate
    const interestRate = parseFloat(document.querySelector('interestRate').value) / 100 / 12;
    //Loan months
    const loanTermMonths = parseFloat(document.querySelector('loanTerm').value) * 12;

    // Calculate monthly mortgage payment
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTermMonths));

    // Display result in the console
    document.getElementById('result').innerHTML = `Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`;
});




