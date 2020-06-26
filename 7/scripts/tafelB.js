var getal = document.getElementById("getal").value;
var submit = document.getElementById("submit");
var uitwerking = document.getElementById("uitwerking");
var i = 1;

submit.onclick = () => {
    while (i <= 10) {
        uitwerking.innerHTML += i + " x " + getal + " = " + (i*getal) + "<br>";
        i++;
    }
}
