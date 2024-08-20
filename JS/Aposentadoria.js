function calculateRetirement() {
    const currentAge = parseInt(document.getElementById('current-age').value);
    const retirementAge = parseInt(document.getElementById('retirement-age').value);
    const currentSavings = parseFloat(document.getElementById('current-savings').value);
    const monthlyContribution = parseFloat(document.getElementById('monthly-contribution').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;

    const yearsToRetirement = retirementAge - currentAge;
    const monthsToRetirement = yearsToRetirement * 12;

    let futureSavings = currentSavings;

    for (let i = 0; i < monthsToRetirement; i++) {
        futureSavings += monthlyContribution;
        futureSavings *= (1 + interestRate / 12);
    }

    document.getElementById('result').innerText = `R$ ${futureSavings.toFixed(2)}`;
}
