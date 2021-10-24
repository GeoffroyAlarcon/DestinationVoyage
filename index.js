var voyage = ["Amsterdam", "Londres", "Berlin", "Bruxels", "Munich", "Madrid", "Florence", "Rome", "Dublin", "Edimbourg"];
document.getElementById("hasard").addEventListener("click", function () {
    var nombreRamdom = Math.random();
    var indexRamdom = Math.round(nombreRamdom * 10);
    var destinationchoisie = voyage[indexRamdom];
    console.log(indexRamdom);
    document.getElementById("destinationVoyage").value = destinationchoisie;
})