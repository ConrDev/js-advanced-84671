// variabelen
var canvas = document.getElementById("ballenCanvas");
var c = canvas.getContext('2d');

var aantalBallen = 400;
var min = Math.round(Math.ceil(20));
var max = Math.round(Math.floor(84)); // student nummer is 84671

// random kleurtjes
function randomKleur() {
    var letters = "0123456789ABCDEF";
    var color = "#";

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

for (var i = 0; i < 400; i++) {
    // console.log(randomKleur());
    c.beginPath();
    c.fillStyle = randomKleur();
    c.arc(Math.floor(Math.random()*(2000)+1) , Math.floor(Math.random()*(800)+1), Math.floor(Math.random() * max) + min, 0, Math.PI * 2);
    c.moveTo(Math.random() * i, Math.random() * i);
    c.fill();
}