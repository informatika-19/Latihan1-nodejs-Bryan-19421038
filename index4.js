// array

// const listNilai = ['A' , 'B', 'C']
// console.log(listNilai[2])

const DataMahasiswa = [
{
    nama : 'Bryan',
    npm : '19421038',
    prodi : 'Informatika'
},
{
    nama : 'savin',
    npm : '19421008',
    prodi : 'informatika'

}   


]

// console.log(DataMahasiswa[0].npm)

for (let i in DataMahasiswa) {
    console.log(DataMahasiswa[i].nama + ' - ' + DataMahasiswa[i].npm + ' - ' + DataMahasiswa[i].prodi )
}
