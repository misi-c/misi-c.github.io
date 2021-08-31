//Global scope
var globalName = "Joe";

function something() {
    var globalName = "Jack";
    console.log(globalName);
}
something();
console.log(globalName);