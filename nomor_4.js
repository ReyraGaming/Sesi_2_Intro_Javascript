//let namaKaryawan = 'Jupri'
//let gajiPokok = 3300000
//let jumlahJamKerja = 60
//let tarifPerJam = 55000
//let lembur = 30
//let tarifLembur = 110000

const dataKaryawan = {
        namaKaryawan: 'Jupri',
        gajiPokok: 3300000,
        jumlahJamKerja: 60,
        tarifPerJam: 55000,
        lembur: 30,
        tarifLembur: 110000
    };

if (dataKaryawan.jumlahJamKerja > 40) {
    const totalGaji = dataKaryawan.gajiPokok + (40 * dataKaryawan.tarifPerJam) + (dataKaryawan.lembur * dataKaryawan.tarifLembur)
    console.log (`Karyawan ${dataKaryawan.namaKaryawan} menerima gaji sebesar ${totalGaji}`);
} else {
    console.log (`Karyawan ${dataKaryawan.namaKaryawan} menerima gaji sebesar ${gajiPokok}`);
}