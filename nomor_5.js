const daftarPasien = [
    {
        kodePasien : "PS001",
        statusPasien : "Pasien Baru",
        biayaPasien : 500000,

    },
    {
        kodePasien : "PS002",
        statusPasien : "Pasien Lama",
        biayaPasien : 400000
    },
    {
        kodePasien : "PS003",
        statusPasien : "Pasien BPJS",
        biayaPasien : 300000,
    },
    {
        kodePasien : "PS004",
        statusPasien : "Pasien Akses",
        biayaPasien : 200000,
    },
];

//input nama dan kode pasien
const namaPasien = "Akbar"
const inputKodePasien = "PS002"

//Mencari elemen dari kode pasien
const pasien = daftarPasien.find((nomorPasien) => nomorPasien.kodePasien === inputKodePasien)


const daftarKamar = [
    {
        kodeKamar : "1111",
        namaKamar : "Kamar Melati",
        biayaKamar: 1000000,
        
    }, 
    {
        kodeKamar : "2222",
        namaKamar : "Kamar Mawar",
        biayaKamar : 2000000,
    }, 
    {
        kodeKamar : "3333",
        namaKamar : "Kamar Dahlia",
        biayaKamar : 3000000,
    }, 
    {
        kodeKamar : "4444",
        namaKamar : "Kamar Anggrek",
        biayaKamar : 4000000,
    }, 
    {
        kodeKamar : "5555",
        namaKamar : "Kamar Tulip",
        biayaKamar : 5000000,
    },
];

//input kode kamar 
const inputKodeKamar = "5555"

//Mencari elemen dari kode kamar
const namakamar = daftarKamar.find((nomorKamar) => nomorKamar.kodeKamar === inputKodeKamar)


const daftarDokter = [
    {
        kodeDokter : "DK001",
        namaDokter : "dr. Andi",
        biayaPemeriksaan : 500000

    }, 
    {
        kodeDokter : "DK002",
        namaDokter : "dr. Joko",
        biayaPemeriksaan :400000,
    }, 
    {
        kodeDokter : "DK003",
        namaDokter : "dr. Karni",
        biayaPemeriksaan : 300000,

    }, 
    {
        kodeDokter : "DK004",
        namaDokter : "dr. Amin",
        biayaPemeriksaan : 200000,
    }, 
    {
        kodeDokter : "DK005",
        namaDokter : "dr. Udin",
        biayaPemeriksaan : 100000,
    },
];

//Input data dokter
const inputKodeDokter = "DK003"

//Mencari elemen dari kodeDokter
const dokter = daftarDokter.find((nomorDokter) => nomorDokter.kodeDokter === inputKodeDokter)


//Jumlah Harga
const totalHarga = dokter.biayaPemeriksaan + namakamar.biayaKamar + pasien.biayaPasien
console.log(`Pasien ${namaPasien} adalah ${pasien.statusPasien} yang dirawat oleh ${dokter.namaDokter} 
di ${namakamar.namaKamar} dan membayar total sejumlah Rp. ${totalHarga}`)



