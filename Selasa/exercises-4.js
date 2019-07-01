var tanggal = 2; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 7; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2019; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulan_text;

switch(bulan){
    case 1: 
        bulan_text = 'Januari';
        break;
    case 2:
        bulan_text = 'Februari';
        break;
    case 3:
            bulan_text = 'Maret';
            break;
    case 4:
            bulan_text = 'April';
            break;
    case 5:
            bulan_text = 'Mei';
            break;
    case 6:
            bulan_text = 'Juni';
            break;
    case 7:
            bulan_text = 'Juli';
            break;
    case 8:
            bulan_text = 'Agustus';
            break;
    case 9:
            bulan_text = 'September';
            break;
    case 10:
            bulan_text = 'Oktober';
            break;
    case 11:
            bulan_text = 'November';
            break;
    case 12:
            bulan_text = 'Desember';
            break;
    default:
}

console.log(tanggal+' '+bulan_text+' '+tahun);