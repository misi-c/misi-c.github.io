function calcAmount() {
    let price = 1000;
    let delivery = 500;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
//    if (isNaN(amountNumber)) {
//        amountNumber = 0
//    }


    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat");
        //return;
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket vásárolhat");
        //return;
    } else if ((amountNumber * price) < 5000) {
        let amount = amountNumber * price + delivery;

        showAmount.innerHTML = amount;
    } else {
        let amount = amountNumber * price;

        showAmount.innerHTML = amount;
    }


}