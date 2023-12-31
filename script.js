function generateLoanDetails() {

    const vehicleBasePrices = {
        "Economy Car": "$110.00",
        "Family Sedan": "$120.00",
        "Luxury Vehicle": "$160.00",
        "Sports Car": "$190.00",
        "SUVs and Truck": "$130.00"
    };

    let drivingRecords = [
        { record: "Clean Record (No Accidents or Violations)", recordRate: "+0%", narrative: "You enjoy the most affordable insurance rates due to your impeccable driving history, with no increase in your premium. Your clean record, free of accidents and violations, ensures you pay the base rate for your car insurance." },
        { record: "Minor Violations (Speeding, Stop Sign Violations)", recordRate: "+15%", narrative: "After receiving a speeding ticket, your monthly insurance premium increases by 15%, reflecting the added risk from your minor traffic violation. This uptick serves as a financial reminder for you to adhere more closely to traffic laws." },
        { record: "Major Violations (Reckless Driving)", recordRate: "+30%", narrative: "Following a charge for reckless driving, you see a 30% hike in your insurance costs, a significant penalty for your major driving violation. This increase not only impacts your wallet but also marks you as a high-risk driver to insurers." },
        { record: "At-Fault Accidents", recordRate: "+35%", narrative: "Being involved in an at-fault accident leads to a 35% increase in your insurance premium. This rise reflects the heightened risk and potential for future claims that insurers associate with drivers who have caused accidents." },
        { record: "Multiple Incidents", recordRate: "+50%", narrative: "With a history of multiple driving incidents, including both violations and accidents, your insurance premium has surged by 50%. This substantial increase is a consequence of your repeated lapses in safe driving, making you a notably high-risk client for insurance companies." }
    ];

    let creditScores = [
        { score: "450", interestRate: "18%", narrative: "With a credit score of 450, falling in the lowest range, lenders view you as a high-risk borrower, leading to an interest rate of approximately 18%. This is due to the perceived risk associated with lending to individuals with lower credit scores, significantly increasing the cost of your loan." },
        { score: "550", interestRate: "12%", narrative: "Your credit score of 550 places you in a moderately risky category for lenders, resulting in a 12% interest rate on your auto loan. This rate reflects a cautious approach from lenders due to your mid-range credit score, indicating a fair but still uncertain creditworthiness." },
        { score: "630", interestRate: "8%", narrative: "A credit score of 630 puts you in a somewhat favorable position with lenders, attracting an 8% interest rate on your loan. This improved rate suggests lenders recognize a lower risk in extending credit to you, compared to lower score ranges." },
        { score: "720", interestRate: "5%", narrative: "With a credit score of 720, you are considered a low-risk borrower, securing a favorable 5% interest rate on your auto loan. This score signals strong creditworthiness, leading lenders to offer you more attractive loan terms." },
        { score: "810", interestRate: "2%", narrative: "Holding an excellent credit score of 810 places you in the top tier, warranting the lowest interest rate of 2% for your auto loan. This score demonstrates exceptional credit health, convincing lenders to offer you the most advantageous borrowing terms." }
    ];


    let downPayments = ["0%", "5%", "10%", "15%", "20%", "25%", "30%"];
    let loanDurations = [
        { duration: "2 Years", narrative: "Short-term loan with higher monthly payments but lower overall interest cost." },
        { duration: "3 Years", narrative: "Common mid-range term offering a balance between monthly payment size and total interest paid." },
        { duration: "4 Years", narrative: "Longer term that reduces monthly payments, suitable for moderately priced vehicles." },
        { duration: "5 Years", narrative: "One of the most popular loan terms, offering manageable payments over a medium term." },
        { duration: "6 Years", narrative: "Extended term for lower monthly payments, usually chosen for more expensive vehicles." }
    ];

    let vehicleType = document.getElementById("vehicleType").value;
    let basePrice = vehicleBasePrices[vehicleType];
    let drivingRecord = drivingRecords[Math.floor(Math.random() * drivingRecords.length)];
    let creditScore = creditScores[Math.floor(Math.random() * creditScores.length)];
    let downPayment = downPayments[Math.floor(Math.random() * downPayments.length)];
    let loanDuration = loanDurations[Math.floor(Math.random() * loanDurations.length)];

    let details = `
    <div class="justify-between gap-x-4 mb-8">
    <p class="text-sm leading-6 text-indigo-300">VEHICLE TYPE</p>
    <span class="text-4xl font-bold tracking-tight text-white">${vehicleType}</span>
    </div>

    <div class="justify-between gap-x-4 mb-8">
    <p class="text-sm leading-6 text-indigo-300">BASE INSURANCE COST</p>
    <span class="text-4xl font-bold tracking-tight text-white">${basePrice}</span>
    </div>

    <div class="justify-between gap-x-4 mb-8">
    <p class="text-sm leading-6 text-indigo-300">DRIVING RECORD</p>
    <span class="text-4xl font-bold tracking-tight text-white">${drivingRecord.record}</span>
    <p class="text-sm leading-6 text-gray-300">${drivingRecord.narrative}</p>
    </div>

    <div class="justify-between gap-x-4 mb-8">
    <p class="text-sm leading-6 text-indigo-300">DRIVING RECORD INSURANCE INCREASE</p>
    <span class="text-4xl font-bold tracking-tight text-white">${drivingRecord.recordRate}</span>
    <p class="text-sm leading-6 text-gray-300">Add this percentage to your base insurance cost.</p>
    </div>
    `;

    let details2 = `

    <div class="justify-between gap-x-4 mb-8">
    <p class="text-sm leading-6 text-indigo-300">CREDIT SCORE</p>
    <span class="text-4xl font-bold tracking-tight text-white">${creditScore.score}</span>
    <p class="text-sm leading-6 text-gray-300">${creditScore.narrative}</p>
    </div>

    <div class="justify-between gap-x-4 mb-8">
    <p class="text-sm leading-6 text-indigo-300">CREDIT SCORE INTEREST RATE</p>
    <span class="text-4xl font-bold tracking-tight text-white">${creditScore.interestRate}</span>
    </div>

    <div class="justify-between gap-x-4 mb-8">
    <p class="text-sm leading-6 text-indigo-300">CAR LOAN DOWN PAYMENT</p>
    <span class="text-4xl font-bold tracking-tight text-white">${downPayment}</span>
    </div>

    <div class="justify-between gap-x-4">
    <p class="text-sm leading-6 text-indigo-300">LOAN DURATION</p>
    <span class="text-4xl font-bold tracking-tight text-white">${loanDuration.duration}</span>
    <p class="text-sm leading-6 text-gray-300">${loanDuration.narrative}</p>
    </div>

    `;

    document.getElementById("loanDetails").innerHTML = details;
    document.getElementById("loanDetails2").innerHTML = details2;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("vehicleType").addEventListener("change", generateLoanDetails);
});
