const chalk = require("chalk")
const fs = require("fs")
global.limitawal = {
    premium: "Infinity",
    free: 15, // set yang ini aja bebas
}

//VCARD OWNER PAS KETIK !OWNER
global.ownerss = ['6287788617688','6281617902622','60164043462']; //
global.names = ['Jeff','Mark','Caem']; // ini nama vcard juga kalau mau cuman 1 nomor berikut contohnya

/*
global.ownerss = ['628xxxx'];
global.names = ['awokwikwor']
*/

// ======[ END VCARD] =========\\


global.keyopenai = "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"// Gausa di apa² in
global.apizein = 'zenzkey_945a0b8a03c5'//Biarin aja
global.owner = ['687788617688','6281617902622']
global.ownernomer = "6287788617688" 
global.ownername = "Jeff Caem" 
global.ytname = "YT: Jeff Caem" 
global.socialm = "https://chat.whatsapp.com/IyRJc40uFOyFRhjt3OIWh3" 
global.location = "indonesia, jawa barat, dki jakarta" 
global.botname = "JEFF BOT"
global.ownernumber = '6287788617688'
global.ownername = 'Jeff Caem'
global.ownerNumber = ["6287788617688@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@jeffcaem4266"
global.websitex = "https://chat.whatsapp.com/IyRJc40uFOyFRhjt3OIWh3"
global.wagc = "https://chat.whatsapp.com/EvT05htMJdN2JISFSyHGe0"
global.themeemoji = '🤗'
global.wm = "Jeff Caem"
global.packname = "Sticker By"
global.author = "Jeff Caem"
global.creator = "6287788617688@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.thum = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.log0 = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.err4r = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.thumb = fs.readFileSync("./gambar/fake/jembot.jpg") 
global.lgc = `https://chat.whatsapp.com/FPYkEE8JI6mFoIA4qLYz6G`
global.fprem = `https://telegra.ph/file/0e3353c5fb155a5f1887e.jpg`
global.mess = {
    masukanusername: '🌸Halo Kakak Yang terhormat Silahkan Masukan Username/id/nick Ya kak Agar kami bisa Mencari username tersebut',
    success: '✅ TUGAS SELESAI',
    admin: '⚠️ Mohon maaf, fitur ini hanya dapat diakses oleh administrator. Jika Anda memiliki pertanyaan, silakan hubungi administrator terlebih dahulu.',
    botAdmin: '⚠️ Maaf, namun untuk menggunakan fitur ini, bot harus memiliki status sebagai administrator. Silakan lakukan konfigurasi yang diperlukan untuk mengaktifkannya.',
    premime: '🔒 Selamat datang di Fitur Spesial Premium! Menawarkan beragam keunggulan eksklusif, fitur ini membutuhkan langganan. Jika Anda tertarik, silakan ketik "owner" untuk mendapatkan informasi lebih lanjut.',
    owner: '⚠️ Maaf, fitur ini hanya tersedia untuk pemilik. Jika Anda memiliki hak akses sebagai pemilik, silakan nikmati keistimewaannya.',
    group: '⚠️ Fitur ini dirancang khusus untuk digunakan dalam grup. Dengan memanfaatkannya, Anda dapat memberikan pengalaman yang lebih menarik dan terkoordinasi kepada anggota grup Anda.',
    private: '⚠️ Fitur ini didedikasikan untuk obrolan pribadi. Anda dapat menggunakannya untuk berinteraksi secara intim dan pribadi dengan orang-orang terdekat Anda.',
    bot: '⚠️ Maaf, fitur ini hanya dapat diakses oleh bot. Jika Anda adalah pemilik bot, pastikan bot Anda dikonfigurasi dengan benar untuk mengaktifkan fitur ini.',
    wait: '⌛ Mohon bersabar sejenak. Proses ini sedang berjalan dan akan segera selesai.',
    linkm: '❓ Maaf, tapi saya perlu tahu di mana letak link tersebut. Mohon berikan informasi lebih lanjut.',
    endLimit: '⚠️ Maaf, Anda telah mencapai batas harian. Untuk memberikan kesempatan yang adil kepada semua pengguna, batas akan diatur ulang setiap 12 jam.',
    nsfw: '⚠️ Maaf, fitur nsfw belum diaktifkan. Silakan hubungi administrator untuk mengaktifkan fitur ini dan mengetahui lebih lanjut tentang pengaturannya.',
   denied: '✖️ AKSES DI TOLAK',
}





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})