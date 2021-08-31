// function calcAmount() {
//     let price = 1000;
//     let delivery = 500;
//     let amountInput = document.querySelector("input[name='amount-input']");
//     let showAmount = document.querySelector("span.show-amount");
//     let amountNumber = parseInt(amountInput.value);
//     amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
// //    if (isNaN(amountNumber)) {
// //        amountNumber = 0
// //    }
//     if (amountNumber > 10) {
//         alert("Maximum 10 terméket vásárolhat");
//         //return;
//     } else if (amountNumber < 1) {
//         alert("Minimum 1 terméket vásárolhat");
//         //return;
//     } else if ((amountNumber * price) < 5000) {
//         let amount = amountNumber * price + delivery;
//         showAmount.innerHTML = amount;
//     } else {
//         let amount = amountNumber * price;
//         showAmount.innerHTML = amount;
//     }
// }
// // Add helptext
// let helptext = document.createElement("small");
// helptext.className = "form-text text-muted";
// helptext.innerHTML = "adja meg a feltéteket";
// var linebreak = document.createElement("br");
// let parent = document.querySelector("div.form-group:nth-child(1)");
// parent.appendChild(linebreak);
// parent.appendChild(helptext);

let orderForm = document.querySelectorAll("#orderForm");
orderForm.addEventListener ("submit", function(ev) {
    ev.preventDefault();
    let inputs = this.querySelector("input");
    let values = {};
    for (let i = 0; i < inputs.lenght; i++) {
        values[inputs[i].name] = inputs[i].value; 
    }
    console.log( values );
 });
 