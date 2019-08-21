const controller = document.querySelector('ion-alert-controller');
const bhapus = document.querySelector('.hapus');
const btambah = document.querySelector('.tambah');
var total = parseInt("0");
bhapus.addEventListener('click', HapusButtonClick);
btambah.addEventListener('click', TambahButtonClick);

var nama = [];
var pengeluaran = [];
var i = 0;
var list = document.createElement("ion-item");

function HapusButtonClick() {
    console.log(nama.length);
    if (nama[0] == null || pengeluaran[0] == null) {
        alert();
    }
    else {
        console.log(nama[0]);
        nama.splice(0);
        pengeluaran.splice(0);
        tampil(0);
        var print = "   Total Pengeluaran : Rp.0,00";
        document.getElementById("hasil").innerHTML = print;
        i = 0;
        total = 0;
    }
}

function TambahButtonClick() {
    var checkName = document.getElementById("nama").value;
    var checkJumlah = document.getElementById("jumlah").value;

    nama[i] = checkName;
    pengeluaran[i] = checkJumlah;
    i = i + 1;

    total = total + parseInt(checkJumlah);

    if (checkName == "" || checkJumlah == "") {
        alert();
    } else {
        tampil(total);
    }
    document.getElementById("nama").value = "";
    document.getElementById("jumlah").value = "";
}

function alert(){
    controller.create({
        header: 'Terjadi Kesalahan',
        message: 'Mohon masukkan nama dan jumlah pengeluaran',
        buttons: ['Tutup']
    }).then(alert => {
        alert.present();
    });
}

function tampil(hasil){
    document.getElementById("data").innerHTML = "";
    var j;

    for(j = 0; j < nama.length; j++){
        var list = document.createElement("ion-item");
        list.append(nama[j], ' : Rp.', pengeluaran[j], '.00');
        document.getElementById("data").appendChild(list);
        var print = "   Total Pengeluaran : Rp. " + hasil + ",00";
        document.getElementById("hasil").innerHTML = print;
    }
}