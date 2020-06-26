var getal = document.getElementById("getal").value;
var submit = document.getElementById("submit");
var uitwerking = document.getElementById("uitwerking");

submit.onclick = () => {
    for (i=1; i <= 10; i++) {
        uitwerking.innerHTML += i + " x " + getal + " = " + (i*getal) + "<br>";
    }
}
