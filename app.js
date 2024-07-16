document.getElementById('khodamform').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateRandomKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam slot <mark>${nama}</mark> hari ini adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
});

function generateRandomKhodam() {
    const khodams = [
        'Princes Jenglot', 'Zeus Kuyang Cacat', 'Bonanza Slebew', 'Gatot Kaca Siluman Kupu-Kupu',
        'Mahjong Panjat Pucang', 'Wild Bandito Balap Karung', 'Ganesha Fortune Siluman Berang-Berang',
        'PUBG Lomba Karaoke', 'Panda Chef Berenang', 'Ong Bak Deluxe Balap Sepeda', 'Roma Main Klereng',
        'Wild Ace Ular Kadut', 'Boxing King Lawan KKJE', 'Charge Buffalo Maen Biliar', 'Gold Rush Maen Voly',
        'Koi Gate Lomba Krupuk', '5 Lucky Lions Maen Catur', 'Tuk Tuk Thailand Terbalik', 'Wild Trucks Nabrak Palang SD',
        'Royal Potato Iklan TV', 'Crystal Golem Main Film', 'Reapers Younglex', 'Titan Strike Back Kanan',
        'Candy Gold Ikut Perang', 'Santa Pets Siluman Kera', 'The Crown Salto Salto', 'Santa vs Aliens Menang Barca',
        'Roma Siluman Udang Gala', 'Dragon Wish Mancing Belut', 'Royale Vegas Balap Liar', 'Panda Opera Van java',
        'Mahjong Ways 3 Kali', 'SUPER WIN Strike Salmon', 'LUCKY KOIN Keberuntungan', 'KUNGFU Hustle',
        'Thor : Hammer Time ikut Avengers', 'True Kult Ma Plus', 'The Crypt Silent', 'D-Day is The Day',
        'Golf2 Bareng Kamu', 'Dancing Samba Brazil', 'Midas Hand God', 'Mahjong Win Lagi', 'Apes Squad Halilintar',
        'Mahjong Style Balap Babi', 'Crypto Coin Timothy Ronald', 'BlackPink Siluman Naga', 'ZEUS Orang Bunian',
        'Crazy Buffalo Siluman Ular', 'Legend of Inca Si Gemezz', 'Win Win Neko Caceng Alaska', 'Dragon Soar Angsa',
        'BigThreeDragons Kiu-Kiu Cukrukuk', 'Kong Lo Merat', 'BirdsParty Malam Hari'
    ];

    const randomIndex = Math.floor(Math.random() * khodams.length);
    return khodams[randomIndex];
}