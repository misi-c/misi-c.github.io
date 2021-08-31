let users = [
    { surname: "Berger", firstname: "Whitney", age: 22 },
    { surname: "Nagy", firstname: "Fero", age: 25 },
    { surname: "Kiss", firstname: "László", age: 46 },
    { surname: "Kovács", firstname: "Nóra", age: 63 },
    { surname: "Schmidt", firstname: "Jakab", age: 55 },
    { surname: "Lengyel", firstname: "Kálmán", age: 52 },
    { surname: "Takács", firstname: "János", age: 34 },
    { surname: "Piros", firstname: "Gizella", age: 34 },
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);

}
let createButtonGroup = parent => {

    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn btn-info";
    btnInfo.innerHTML = '<i class="fas fa-pencil-alt"></i>';

    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k) + 1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}