
// step 1: add event listener to the deposit button
document.getElementById('btn-deposit-submit').addEventListener('click', function() {
    // step 2: get the deposit amount from the deposit input field
    // get input value
    const depositField = document.getElementById('input-deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = "";

    if (isNaN(newDepositAmount)) {
        alert("Not a valid number");
        return;
    }

    // step 3: get the current deposit total amount
    // for non-input (element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step 4: add nums to set the total deposit
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById("balance-total");
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculae current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear the deposit field
    // depositField.value = "";
});