"use strict"

let loanAmount = 32174;
let interestRate = 8.65;
let loanTermMonths = 12;


document.querySelector('#mortgageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const loanAmount = parseFloat(document.querySelector('#loanAmount').value);
    const interestRate = parseFloat(document.querySelector('#interestRate').value) / 100 / 12; // Monthly interest rate
    const loanTermMonths = parseFloat(document.querySelector('#loanTerm').value) * 12; // Loan term in months

    // Calculate monthly mortgage payment
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTermMonths));

    // Display result
    document.querySelector('#result').innerHTML = `Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)}`;
});

