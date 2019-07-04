let nama = 'candra';
// Ksatria, Tabib, dan Penyihir
let peran = 'Ksatriax';

if(nama === ''){
    console.log('Nama harus diisi!');
} else if(peran === ''){
    console.log('Halo '+nama+', Pilih Peranmu untuk memulai game!');
} else {
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    
    if (peran === 'Ksatria') {
        console.log('Halo '+peran+' ,'+nama+' kamu dapat menyerang dengan senjatamu!');
    } else if (peran === 'Tabib') {
        console.log('Halo '+peran+' ,'+nama+' kamu akan membantu temanmu yang terluka.');
    } else if (peran === 'Penyihir') {
        console.log('Halo '+peran+' ,'+nama+' ciptakan keajaiban yang membantu kemenanganmu!');
    } else {
        console.log('Maaf '+nama+' peran '+peran+' tidak tersedia silahkan pilih peran Ksatria, Tabib, atau Penyihir!');
    }
}