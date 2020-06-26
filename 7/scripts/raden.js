var getal;
var antwoord = document.getElementById("antwoord");

randomGetal = Math.floor(Math.random() * Math.floor(100));
var counter = document.getElementById("counter");
var count = -1;

console.log(randomGetal);

var antwoordText = ""
function antwoordCheck() {
    if (getal == randomGetal) antwoordText = "je hebt het getal geraden!";
    else if (getal < randomGetal) antwoordText = "het getal is te klein!";
    else if (getal > randomGetal) antwoordText = "het getal is te groot!";
}

while (getal != randomGetal) {
    getal = window.prompt("Raad het getal\n" + antwoordText + "\n\nAantal keer geraden: " + (count += 1));
    antwoordCheck();
}
if (window.confirm("Goed Geraden!\n\nWil je nog een keer spelen?\n\n")) {
    location.reload(true);
} else {
    location.replace("https://www.google.com/");
}