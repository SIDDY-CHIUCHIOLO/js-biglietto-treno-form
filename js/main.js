
let bottoneGenera = document.getElementById("genera");

let bottoneCancella = document.getElementById("cancella");


let inputUser = document.getElementById("user-first-last-name");


let userName = document.getElementById("user-name");

let inputKm = document.getElementById("km-utente");

let etaUtente = document.getElementById("eta-utente");


let prezzoBase = 0.27;



bottoneGenera.addEventListener("click", function () {
    userName.innerHTML = inputUser.value;
    console.log(inputUser.value, "(nome e cognome dell'acquirente)");

    let bigliettoPrezzoBase = prezzoBase * inputKm.value;
    console.log(bigliettoPrezzoBase)

    console.log(etaUtente.value)

    if (etaUtente.value == "minorenne"){
        bigliettoPrezzoBase = bigliettoPrezzoBase * 0.83;
    } else if(etaUtente.value == "over65"){
        bigliettoPrezzoBase = bigliettoPrezzoBase * 0.67;

    } else {
        console.log("nessuno sconto")
    }

    let costoTotale = document.getElementById("costo-totale");

    costoTotale.innerHTML = bigliettoPrezzoBase.toFixed(2)

    let offertaUser = document.getElementById("offerta");
    let offertaUserValue = parseInt(Math.floor(Math.random() * 5) + 1);
    console.log(offertaUserValue)
    offertaUser.innerHTML = offertaUserValue

    let carrozzaUser = document.getElementById("carrozza");
    let carrozzaUserValue = parseInt(Math.floor(Math.random() * 10) + 1);
    console.log(carrozzaUserValue)
    carrozzaUser.innerHTML = carrozzaUserValue

    let codiceUser = document.getElementById("codice-cp");
    let ccodiceUserValue = parseInt(Math.floor(Math.random() * 1000) + 1);
    console.log(ccodiceUserValue)
    codiceUser.innerHTML = ccodiceUserValue
});

bottoneCancella.addEventListener("click", function () {
    etaUtente.value = "minorenne";
    inputUser.value = "";
    inputKm.value = "";
    userName.innerHTML = ""
    let costoTotale = document.getElementById("costo-totale");
    costoTotale.innerHTML = ""
    let offertaUser = document.getElementById("offerta");
    offertaUser.innerHTML = ""
    let carrozzaUser = document.getElementById("carrozza");
    carrozzaUser.innerHTML = ""
    let codiceUser = document.getElementById("codice-cp");
    codiceUser.innerHTML = ""
})