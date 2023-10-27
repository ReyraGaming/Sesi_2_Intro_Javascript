const dataMahasiswa = [
    {
        nama: "Harry Potter",
        fakultas: "Magic Potion",
        semester: 3,
    },
    {
        nama: "Leon S K",
        fakultas: "Virus Slayer",
        semester: 2,
    },
];

for (let data of dataMahasiswa) {
    console.log(`${data.nama} semester ${data.semester} fakultas ${data.fakultas}`);
}