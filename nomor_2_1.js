const dataUsia = require('readline');

const userUsia = dataUsia.createInterface({
    input: process.stdin,
    output: process.stdout
});

userUsia.question('Masukkan usia anda : ', (usia) => 
{
    if (usia < 18) {
        console.log('Anda masih dibawah umur');
    } else {
        console.log('Anda sudah dewasa');
    }

    userUsia.close();
});