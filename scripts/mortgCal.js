"use strict"

let loanAmount = 53000;
let interestRate = 7.63;
let loanTermMonths = 15;
let totalPayments = "";


document.querySelector('#mortgageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    const loanAmount = parseFloat(document.querySelector('#loanAmount').value);
    const interestRate = parseFloat(document.querySelector('#interestRate').value) / 100 / 12; // Monthly interest rate
    const totalPayments = parseFloat(document.querySelector('#loanTerm').value) * 12; // Loan term in months

    // Calculate monthly mortgage payment
    const monthlyPayment = loanAmount * (interestRate*Math.pow(1+interestRate, totalPayments)) / (interestRate*Math.pow(1+interestRate, totalPayments)-1)
    const totalAmount = (totalPayments * monthlyPayment)
    const totalnterest = (totalAmount - loanAmount)


    // Display result
    document.querySelector('#result').innerHTML = `Monthly Mortgage Payment: $${monthlyPayment.toFixed(2)} your totalInterest paid $${totalnterest.toFixed(2)} `;
});

