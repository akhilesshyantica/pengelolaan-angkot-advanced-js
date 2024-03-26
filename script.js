// membuat object Angkot
function Angkot (sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // kita buat method
    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        // this.penumpang diatas diambil dari properti array penumpang diatas.
        return this.penumpang;
    }
}

// inisialisasi dari object
var angkot1 = new Angkot("Akhiles Aga", ["Kedungwuluh", "Karangklesem"], [], 0);

var angkot2 = new Angkot ("Leo Messi", ["Purwokerto", "Bumiayu"] , [], 0);