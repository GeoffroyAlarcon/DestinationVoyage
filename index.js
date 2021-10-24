var voyage = ["Amsterdam", "Londres", "Berlin", "Bruxelles", "Munich", "Madrid", "Florence", "Rome", "Dublin", "Edimbourg"];
document.getElementById("hasard").addEventListener("click", function () {
    var nombreRamdom = Math.random();
    var indexRamdom = Math.round(nombreRamdom * 9);
    var destinationchoisie = voyage[indexRamdom];
   document.getElementById("destinationVoyage").value = destinationchoisie;
})