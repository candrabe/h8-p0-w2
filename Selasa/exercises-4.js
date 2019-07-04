var tanggal = 2; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 7; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2019; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var bulanText;

switch (tanggal) {
        case 1:
                tanggal = 1;
                break;
        case 2:
                tanggal = 2;
                break;
        case 3:
                tanggal = 3;
                break;
        case 4:
                tanggal = 4;
                break;
        case 5:
                tanggal = 5;
                break;
        case 6:
                tanggal = 6;
                break;
        case 7:
                tanggal = 7;
                break;
        case 8:
                tanggal = 8;
                break;
        case 9:
                tanggal = 9;
                break;
        case 10:
                tanggal = 10;
                break;
        case 11:
                tanggal = 11;
                break;
        case 12:
                tanggal = 12;
                break;
        case 13:
                tanggal = 13;
                break;
        case 14:
                tanggal = 14;
                break;
        case 15:
                tanggal = 15;
                break;
        case 16:
                tanggal = 16;
                break;
        case 17:
                tanggal = 17;
                break;
        case 18:
                tanggal = 18;
                break;
        case 19:
                tanggal = 19;
                break;
        case 20:
                tanggal = 20;
                break;
        case 21:
                tanggal = 21;
                break;
        case 22:
                tanggal = 22;
                break;
        case 23:
                tanggal = 23;
                break;
        case 24:
                tanggal = 24;
                break;
        case 25:
                tanggal = 25;
                break;
        case 26:
                tanggal = 26;
                break;
        case 27:
                tanggal = 27;
                break;
        case 28:
                tanggal = 28;
                break;
        case 29:
                tanggal = 29;
                break;
        case 30:
                tanggal = 30;
                break;
        case 31:
                tanggal = 31;
                break;
        default:
                console.log('Tanggal harus di antara 1 - 31');
                break;
}

if (!(tahun >= 1900 && tahun <= 2200)) {
        console.log('Tahun harus di antara 1900 - 2200');
        return;
}

switch(bulan){
    case 1: 
        bulanText = 'Januari';
        break;
    case 2:
        bulanText = 'Februari';
        break;
    case 3:
        bulanText = 'Maret';
        break;
    case 4:
        bulanText = 'April';
        break;
    case 5:
        bulanText = 'Mei';
        break;
    case 6:
        bulanText = 'Juni';
        break;
    case 7:
        bulanText = 'Juli';
        break;
    case 8:
        bulanText = 'Agustus';
        break;
    case 9:
        bulanText = 'September';
        break;
    case 10:
        bulanText = 'Oktober';
        break;
    case 11:
        bulanText = 'November';
        break;
    case 12:
        bulanText = 'Desember';
        break;
    default:
}

console.log(tanggal+' '+bulanText+' '+tahun);