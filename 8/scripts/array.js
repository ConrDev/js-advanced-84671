var somArray = new Array();

document.getElementById("start").onclick = () => {
    for (i=0; i < 3; i++) somArray.push(prompt("Geef een getal door"));
    somArray[3] = 0;
    for (i=0; i < somArray.length; i++) somArray[3] = somArray[3] += somArray[i];
    alert(somArray[3]);
    console.log(somArray.reduce((a, b) => a + b));
    document.write(somArray[0] + " + " + somArray[1] + " + " + somArray[2] + " = " + somArray.reduce((a, b) => a + b) + "<br>");
}