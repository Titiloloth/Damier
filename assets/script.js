let maTable = document.createElement("table");
document.body.appendChild(maTable);
for (let nbRows = 1; nbRows <= 8; nbRows++) {
    let uneRow = document.createElement("tr");
    maTable.appendChild(uneRow)
for (let nbcells = 1; nbcells <= 8; nbcells++) {
    let uneCellule = document.createElement("td");
    if nbCells = 1 || 3 || 5 || 7 {
        uneCellule.style.backgroundColor = "pink";
    } else {
        uneCellule.style.backgroundColor = "white";
    }
    uneRow.appendChild(uneCellule);
}
}
