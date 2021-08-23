function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    //    amountNumber = amountNumber || 0;
    
    //    if (isNaN(amountNumber)) {
        //        amountNumber = 0
        //    }
        
        showSumPrice(price, amountNumber);
    }
    
function showSumPrice(price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat");
        //return;
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket vásárolhat");
        //return;
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}