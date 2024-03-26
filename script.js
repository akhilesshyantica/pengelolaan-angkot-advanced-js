// membuat object Angkot
function Angkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
}

// inisialisasi dari object
var angkot1 = new Angkot("Akhiles Aga", ["Kedungwuluh", "Karangklesem"], [], 0);