// Variabelen
var namen = ['harten', 'klaver', 'ruiten', 'schoppen'];
var soorten = ['twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht', 'negen', 'tien', 'boer', 'vrouw', 'heer', 'aas'];

// Titel
let tagje = document.createElement("h1");   // hier wordt een DOM-element aangemaakt (een html tagje dus eigenlijk)
tagje.setAttribute("class", "titel");
tagje.textContent = 'Een kaartspel!';        // de tekst wordt erin gezet
document.body.appendChild(tagje);           // en het element wordt aan de pagina toegevoegd

// plaatjes
var kaarten = "./img/";

function allePlaatjes() {
    var i = 0;
    while (i < 52) {
        var naam = namen[Math.floor(Math.random() * namen.length)];
        var soort = soorten[Math.floor(Math.random() * soorten.length)];
        let img = document.createElement("img");
        img.setAttribute("src", kaarten + naam + soort + ".png");
        document.body.appendChild(img);
        i++;
    }
}

allePlaatjes();