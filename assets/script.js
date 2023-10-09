let maTable = document.createElement("table");
document.body.appendChild(maTable);
for (let nbRows = 1; nbRows <= 8; nbRows++) {
    let uneRow = document.createElement("tr");
    maTable.appendChild(uneRow)
    for (let nbcells = 1; nbcells <= 8; nbcells++) {
        let uneCellule = document.createElement("td");
        let valueCell = (nbRows + nbcells + 1) % 2;

        if (valueCell == 0) {
            uneCellule.style.backgroundColor = "white";
        } else { 
            uneCellule.style.backgroundColor = "pink"; 
        }

        // if (nbcells == 1 || nbcells == 3 || nbcells == 5 || nbcells == 7) {
        //     uneCellule.style.backgroundColor = "pink";
        // } else {
        //     uneCellule.style.backgroundColor = "white";
        // }
        uneRow.appendChild(uneCellule);
    }
}
