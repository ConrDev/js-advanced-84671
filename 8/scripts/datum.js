var dt = document.getElementById("datum-tijd");
var outputdt = document.getElementById("output");
var groet = document.getElementById("groet");
var outputGroet = document.getElementById("output-groet");

function maakDatum() {
    var date = new Date();
    var maand = new Array();
    maand[0] = "January";
    maand[1] = "February";
    maand[2] = "Maart";
    maand[3] = "April";
    maand[4] = "Mei";
    maand[5] = "Juni";
    maand[6] = "Juli";
    maand[7] = "Augustus";
    maand[8] = "September";
    maand[9] = "Oktober";
    maand[10] = "November";
    maand[11] = "December";

    var dag = new Array();
    dag[0] = "maandag";
    dag[1] = "dinsdag";
    dag[2] = "woensdag";
    dag[3] = "donderdag";
    dag[4] = "vrijdag";
    dag[5] = "zaterdag";
    dag[6] = "zondag";

    //var datum = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    var datumTekst = date.getDate() + " " + maand[date.getMonth()] + " " + date.getFullYear();
    var datumDag = dag[date.getDay() - 1];

    function tekst() {
        outputdt.innerHTML = "het is " + datumDag + ", " + datumTekst + "<br>";
    }
    return tekst();
}

function maakTijd() {
    var date = new Date();
    var tijd = date.getHours() + ":" + date.getMinutes();

    var groetTekst = new Array();
    groetTekst[0] = "Goedenmorgen!";
    groetTekst[1] = "Goedenmiddag!";
    groetTekst[2] = "Goedenavond!";
    groetTekst[3] = "Goedennacht!";
    
    function tekst() {
        outputGroet.innerHTML = "De tijd is " + tijd + "<br>";
        if (date.getHours() >= 6 && date.getHours() <= 12) outputGroet.innerHTML += groetTekst[0];
        else if (date.getHours() >= 12 && date.getHours() <= 18) outputGroet.innerHTML += groetTekst[1];
        else if (date.getHours() >= 18 && date.getHours() <= 11) outputGroet.innerHTML += groetTekst[2];
        else if (date.getHours() >= 0 && date.getHours() <= 6) outputGroet.innerHTML += groetTekst[3];
    }
    return tekst();
}

// maakDatum();
// maakTijd();

dt.onclick = () => {
    maakDatum();
}

groet.onclick = () => {
    maakTijd();
}