/*
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field

*/

// step 1
document.getElementById("btn-withdraw-submit").addEventListener('click', function() {
    // step 2
    const inputWithdrawAmountElement = document.getElementById("input-withdraw-amount");
    const inputWithdrawAmountString = inputWithdrawAmountElement.value;
    const inputWithdrawAmount = parseFloat(inputWithdrawAmountString);
    inputWithdrawAmountElement.value = "";

    if (isNaN(inputWithdrawAmount)) {
        alert("Not a valid number");
        return;
    }

    // step 3
    const withdrawPreviousTotalElement = document.getElementById("withdraw-total");
    const withdrawPreviousTotalString = withdrawPreviousTotalElement.innerText;
    const withdrawPreviousTotal = parseFloat(withdrawPreviousTotalString);

    const balanceOnAccount = parseFloat(document.getElementById("balance-total").innerText);

    if (inputWithdrawAmount > balanceOnAccount) {
        alert("Do not have enough money");
        return;
    }


    // step 4
    const totalWithdrawAmount = inputWithdrawAmount + balanceOnAccount;

    
    withdrawPreviousTotalElement.innerText = totalWithdrawAmount;

    // step 4
    const balanceTotalElement = document.getElementById("balance-total");
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    // step 5
    const finalBalanceTotal = balanceTotal - totalWithdrawAmount;
    balanceTotalElement.innerText = finalBalanceTotal;

})