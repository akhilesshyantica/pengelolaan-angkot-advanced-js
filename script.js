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


    // method untuk penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert("Angkot masih kosong!");
        }
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

// inisialisasi dari object
var angkot1 = new Angkot("Akhiles Aga", ["Kedungwuluh", "Karangklesem"], [], 0);

var angkot2 = new Angkot ("Leo Messi", ["Purwokerto", "Bumiayu"] , [], 0);