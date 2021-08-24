function massModify(selector, attribute, value) {
    let nodelist = document.querySelectorAll(selector);
    for (let i = 0; i < nodelist.length; i++) {
        nodelist[i][attribute] = value;
    }
}