const nilai = 80
let nilaihuruf, ket

if (nilai >= 85) {
    nilaihuruf = 'A'
    ket ='Sangat baik'
} 
    else if (nilai >= 75) {
    nilaihuruf ='B'
    ket ='baik'
}
 else if (nilai >= 65) {
     nilaihuruf ='C'
     ket ='cukup'
 }
 else if (nilai >= 55){
     nilaihuruf ='D'
     ket = 'Buruk'
 }
 else {
     nilaihuruf = 'E'
     ket = 'Sangat buruk'
 }

 console.log('nilai Anda ' + nilaihuruf +  ' (' + ket + ')')
// logika bercabang
