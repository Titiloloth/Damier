
function highlight (idCell) {
    let maCellule = document.getElementById(idCell);

    if (document.getElementsByClassName("pion-selection").length != 0) {

        console.log(document.getElementsByClassName("pion-selection")[0].parentElement)

        Array.from(document.getElementsByClassName("pion-selection")).forEach(element => {
            element.classList.remove("pion-selection")
        });
    }


    if (maCellule.firstChild != null) {
        maCellule.firstChild.classList = "pion-selection"
    } 
}