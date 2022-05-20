// handle deposit button

document.getElementById('deposit-button').addEventListener('click', function () {
    
    // get the ammount the deposited

    const depositInput = document.getElementById('deposit-input');
  const newDepositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountText);
    

  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const newDepositTotal = previousDepositAmount + newDepositAmount;
   depositTotal.innerText = newDepositTotal;

//    upadate account Balance

 const BalanceTotal = document.getElementById('balance-total');
 const BalanceTotalText = BalanceTotal.innerText;
 const previousBalanceTotal = parseFloat(BalanceTotalText);
 const newBalanceTotal = previousBalanceTotal + newDepositAmount;
 BalanceTotal.innerText = newBalanceTotal;

//    clear the deposit input filed
    depositInput.value = '';
});

// handle withdraw event handler

    document.getElementById('withdraw-button').addEventListener('click', function () {
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
       const newWithdrawAmount = parseFloat(withdrawAmountText);
       

    //    set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    
    withdrawTotal.innerText = newWithdrawTotal;

    // set balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = '';
    
    })
    