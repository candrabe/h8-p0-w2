/*
* Menyusun Barisan Bintang
* Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.
*/

var rows1 = 5; // input the number of rows

// do loops to display asterisks in the console.
for (var i = 0; i < rows1; i++) {
    console.log('*');
}

/*
* Menyusun Barisan Bintang Dengan Nested Looping
* Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang).
* Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. 
* Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
*/

var rows2 = 5; // input the number of rows
var star2 = '';

// do loops to display asterisks in the console.
for (var i = 0; i < rows2; i++) {
    for (var j = 0; j < rows2; j++) {
        star2 += '*';
    }

    console.log(star2);
    star2 = '';
}

/*
* Menyusun Barisan Tangga Bintang Dengan Nested Looping
* Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga.
* Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris.
* Baris pertama, hanya ada satu bintang.
* Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya.
* Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.
*/

var rows3 = 5; // input the number of rows
var star3 = '';

// do loops to display asterisks in the console.
for (var i = 0; i < rows3; i++) {
    for (var j = 0; j <= i; j++) {
        star3 += '*';
    }

    console.log(star3);
    star3 = '';
}