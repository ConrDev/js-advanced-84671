var x;
var y;

while (x == null) {
    x = window.prompt("Geef een getal");
}
while (y == null) {
    y = window.prompt("Geef een getal");
}

document.write("<h1>"+ x + " to de macht " + y + " = " +Math.pow(x, y) + "</h1>");
// if (window.confirm("Goed Geraden!\n\nWil je nog een keer spelen?\n\n")) {
//     location.reload(true);
// } else {
//     location.replace("https://www.google.com/");
// }