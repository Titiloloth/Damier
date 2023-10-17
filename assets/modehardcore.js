let Damier = document.createElement ("table")

document.body.appendChild(Damier);

const MOT_DICTIONNAIRE = ["a", "à", "A", "à boucheton", "à bras-le-corps", "à brule-pourpoint", "à califourchon", "a capella", 
"à cloche-pied", "a contrario", "à contre-biais", "à contre-bord", "à contre-lumière", "à contre-poil", "à contre-saison"];

for (let nbLignes = 0; nbLignes <=12; nbLignes++){
    let uneLigne = document.createElement("tr");
    Damier.appendChild(uneLigne);

    for (let nbCellules = 0; nbCellules <=12; nbCellules++){
        let uneCellule = document.createElement("td");
            let valeurCellule = (nbLignes + nbCellules) % 2; 

            if (nbCellules == 0 || nbLignes == 0){
                uneCellule.style.border = "none"
                uneCellule.textContent = nbLignes;
                if (nbLignes == 0 && nbCellules > 0){
                    uneCellule.textContent = MOT_DICTIONNAIRE[nbCellules-1]
                } 
            }else {
                if (valeurCellule == 0) {
                    uneCellule.style.backgroundColor = "green"
                } else {
                    uneCellule.style.backgroundColor = "blue"
                }
            }
        uneLigne.appendChild(uneCellule);
    }
} 


