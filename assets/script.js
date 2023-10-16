// Damier
let uneCellule = document.createElement("td");

let maTable = document.createElement("table");
document.body.appendChild(maTable);
const monTableau = ["A", "B", "C", "D", "E", "F", "G", "H"]
for (let nbRows = 0; nbRows <= 8; nbRows++) {
    let uneRow = document.createElement("tr");
    maTable.appendChild(uneRow)
    for (let nbcells = 0; nbcells <= 8; nbcells++) {
        let uneCellule = document.createElement("td");
        let valueCell = (nbRows + nbcells + 1) % 2;
        if (nbRows==0 || nbcells == 0) {
            uneCellule.style.border = "none";
            uneCellule.textContent = nbRows;
            if (nbRows == 0 && nbcells > 0) {
                uneCellule.textContent = monTableau[nbcells-1]
            }
        } else {
            if (valueCell == 0) {
             uneCellule.style.backgroundColor = "white";
            } else { 
             uneCellule.style.backgroundColor = "pink"; 
            }
            uneCellule.setAttribute("id",nbRows+ monTableau[nbcells-1]);
        }
    uneRow.appendChild(uneCellule);
    }
}


// Pièces 

let case8B = document.getElementById("8B");
            let cavalierBlanc = document.createElement("img");
            cavalierBlanc.src = "https://i.postimg.cc/WpXPxjvj/cavalier-blanc.png";
            case8B.appendChild(cavalierBlanc);

let case8A = document.getElementById("8A");
            let tourBlanche = document.createElement("img");
            tourBlanche.src = "https://i.postimg.cc/BvhJgW4Q/tour-blanc.png";
            case8A.appendChild(tourBlanche);

let case8C = document.getElementById("8C");
            let fouBlanc = document.createElement("img");
            fouBlanc.src = "https://i.postimg.cc/pXv3pGM0/fou-blanc.png";
            case8C.appendChild(fouBlanc);

let case8D = document.getElementById("8D");
            let roiBlanc = document.createElement("img");
            roiBlanc.src = "https://i.postimg.cc/pXv3pGM0/fou-blanc.png";
            case8D.appendChild(roiBlanc);