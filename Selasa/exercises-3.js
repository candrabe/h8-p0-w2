let nama = 'candra';
// Ksatria, Tabib, dan Penyihir
let peran = '';

if(nama === ''){
    console.log('Nama harus diisi!');
} else if(peran === ''){
    console.log('Halo '+nama+', Pilih Peranmu untuk memulai game!');
} else {
    console.log('Selamat datang di Dunia Proxytia, '+nama);
    console.log('Halo '+peran+' ,'+nama+' kamu dapat menyerang dengan senjatamu!');
}