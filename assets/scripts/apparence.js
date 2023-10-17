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
             uneCellule.setAttribute("id", nbcells + "-" + nbRows);
        }

    uneRow.appendChild(uneCellule);
    
    }
}

// Pièces 

    // Cavalerie noire

    const arrayPiecesNoires = ["https://i.postimg.cc/gjvnXbQH/tour-noir.png", "https://i.postimg.cc/tghfMrKm/cavalier-noir.png", "https://i.postimg.cc/t492gXwD/fou-noir.png", 
    "https://i.postimg.cc/HnZs7W35/roi-noir.png", "https://i.postimg.cc/tgK6Yk7y/reine-noir.png", "https://i.postimg.cc/t492gXwD/fou-noir.png","https://i.postimg.cc/tghfMrKm/cavalier-noir.png",
    "https://i.postimg.cc/gjvnXbQH/tour-noir.png"]
    let rowsToPiece3 = document.querySelector("tr:nth-of-type(2)").children;
        for (let index = 1; index < rowsToPiece3.length; index++) {
        let image = document.createElement("img");
        image.src = arrayPiecesNoires[index-1]
        rowsToPiece3[index].appendChild(image);
    
}
        // Pions noirs

        const arrayPionsNoirs = ["https://i.postimg.cc/ZRQM91pn/pion-noir.png"]
        let rowsToPiece4 = document.querySelector("tr:nth-of-type(3)").children;
            for (let index = 1; index < rowsToPiece4.length; index++) {
            let image = document.createElement("img");
            image.src = arrayPionsNoirs
            rowsToPiece4[index].appendChild(image);
    
}

    // Cavalerie blanche

    const arrayPiecesBlanches = ["https://i.postimg.cc/BvhJgW4Q/tour-blanc.png", "https://i.postimg.cc/WpXPxjvj/cavalier-blanc.png", "https://i.postimg.cc/pXv3pGM0/fou-blanc.png", 
    "https://i.postimg.cc/V6LnJQs9/roi-blanc.png", "https://i.postimg.cc/4ywJnqdc/reine-blanc.png", "https://i.postimg.cc/pXv3pGM0/fou-blanc.png","https://i.postimg.cc/WpXPxjvj/cavalier-blanc.png",
    "https://i.postimg.cc/BvhJgW4Q/tour-blanc.png"]
    let rowsToPiece = document.querySelector("tr:nth-of-type(9)").children;
        for (let index = 1; index < rowsToPiece.length; index++) {
        let image = document.createElement("img");
        image.src = arrayPiecesBlanches[index-1]
        rowsToPiece[index].appendChild(image);
    
}

        // Pions blancs
            
        const arrayPionsBlancs = ["https://i.postimg.cc/bwKjYk8p/pion-blanc.png"]
        let rowsToPiece2 = document.querySelector("tr:nth-of-type(8)").children;
            for (let index = 1; index < rowsToPiece2.length; index++) {
            let image = document.createElement("img");
            image.src = arrayPionsBlancs
            rowsToPiece2[index].appendChild(image);
    
}
