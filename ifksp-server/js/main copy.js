//Get data from server
function getServerData(url) {
    let fetchOptions = {
        metod: "GET",
        mode: "cors",
        cache: "no-cache"
    };

    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}
function startGetUsers() {
    getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
}

document.querySelector("#getDataBtn").addEventListener("click", startGetUsers);

// Fill Table with server data
function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(`Table "${tableID}" is not found.`);
        return;
    }

    let tBody = table.querySelector("tbody");
    for (let row of data) {
         tr = createAnyElement("tr");
         for (let k in row) {
             let td = createAnyElement("td");
             td.innerHTML = row[k];
             tr.appendChild(td);
         }
         let btnGroup = createBtnGroup();
         tr.appendChild(btnGroup);
         tBody.appendChild(tr);
    }
}

function createAnyElement(name, attributes) {
    let elemet = document.createElement(name);
    for (let k in attributes) {
        elemet.setAttribute(k, attributes[k]);
    }
    return elemet;
}

function createBtnGroup(){
    let group = createAnyElement("div", {class: "btn btn-group"});
    let infoBtn = createAnyElement("button", {class: "btn btn-info", onclick: "getInfo(this)"});
    infoBtn.innerHTML = `<i class="fa fa-refresh" aria-hidden="true"></i>`;
    let delBtn = createAnyElement("button", {class: "btn btn-danger", onclick: "delRow(this)"});
    delBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

    group.appendChild(infoBtn);
    group.appendChild(delBtn);

    let td = createAnyElement("td");
    td.appendChild(group);
    return group;
}

function delRow (btn) {
    let tr = btn.parentElement.parentElement;
    let id = tr.querySelector("td:first-child").innerHTML;
    let fetchOptions = {
        metod: "DELETE",
        mode: "cors",
        cache: "no-cache"
    };

    fetch(`http://localhost:3000/users/${id}`, fetchOptions).then(
        resp => resp.json(),
        err => console.error(err)
    ).then(
        data => {
            startGetUsers;
        }
    );
}
