let maTable = document.createElement("table");
document.body.appendChild(maTable);
const MON_TABLEAU = ["A", "B", "C", "D", "E", "F", "G", "H"]

for (let nbRows = 0; nbRows <= 8; nbRows++) {

    let uneRow = document.createElement("tr");
    maTable.appendChild(uneRow);
    
    for (let nbcells = 0; nbcells <= 8; nbcells++) {
        let uneCellule = document.createElement("td");
        let valueCell = (nbRows + nbcells) % 2;

        if (nbRows==0 || nbcells == 0) {
            uneCellule.style.border = "none";
            uneCellule.textContent = nbRows;
            if (nbRows == 0 && nbcells > 0) {
                uneCellule.textContent = MON_TABLEAU[nbcells-1]
            }
        } else {
            if (valueCell == 0) {
              uneCellule.style.backgroundColor = "white";
            } else { 
             uneCellule.style.backgroundColor = "pink"; 
            }
        }
    uneRow.appendChild(uneCellule);
    }
}