/*
Összegzés algoritmusa:

összeg = 0
Ciklus AMÍG van még szám, ADDIG
|   szám = következő elem
|   összeg = összeg + szám
CIKLUS VÉGE
*/
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);

/*
Számlálás algoritmusa

db = 0
CIKLUS AMÍG van még szám, ADDIG
|   szám = következő elem
|   Ha igaz a feltétel a számra, AKKOR
|   |   db = db+1
|   FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let par = 0;
for (let i = 0; i < numericArray.length; i++) {
    //Páros számok
    if (numericArray[i] % 2 == 0) {
        par++;
    }
}
console.log("Pared numbers: ", par);

let unpar = 0;
for (let i = 0; i < numericArray.length; i++) {
    //Páratlan számok
    if (numericArray[i] % 2 !== 0) {
        unpar++;
    }
}
console.log("UnPared numbers: ", unpar);

let all = 0;
for (let i = 0; i < numericArray.length; i++) {
    //Páratlan számok
    if (numericArray[i] !== 0) {
        all++;
    }
}
console.log("Total numbers: ", all);

/*
Szélsöérték Keresés algoritmusa
legnagyobb = elsö szam
Ciklus AMÍG van még szam, ADDIG
    szám = következö szám
    Ha szám > legnagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
Ciklus VÉGE
*/
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: ", biggest)

//smallest
let smallest = numericArray[0];
for (let i = 0; i > numericArray.length; i++) {
    if (numericArray[i] > smallest) {
        smallest = numericArray[i];
    }
}
console.log("The smallest element: ", smallest)

/*
Eldöntés tétele (algoritmusa) :

találat = HAMIS
CIKLUS AMIG van elem ÉS NEM találat
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = igaz
    Feltétel vége
Ciklus vége
*/
let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 15) {
        contains = true;
    }
    
}
console.log("This array contens 15: ", contains);