var nodemailer = require('nodemailer');

function unban(no) {
return new Promise((resolve, reject) => {
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user : 'zoeyofficial21@gmail.com', // Email Si Pengirim
        pass : 'vkmyzbzkbhjvmtno'  // password si pengirim
    }
  });

var mailOptions = {
    from : 'zoeyofficial21@gmail.com', // nama email si pengirim
    to   : 'support@support.whatsapp.com',  // tujuan kirim email ke siapa ??
    subject : `Halo dukungan WhatsApp, saya salah satu pengguna WhatsApp dengan nomor ${no} Sayangnya Akun WhatsApp saya telah di blokir Saya maaf telah menginstal aplikasi pihak thard karena kesalahan. Saya meminta untuk membuka blokir akun saya. Tolong bantu saya untuk membuka blokirnya sesegera mungkin. Terimakasih`, // subject nya apa bro ??
    text : `Halo dukungan WhatsApp, saya salah satu pengguna WhatsApp dengan nomor ${no} Sayangnya Akun WhatsApp saya telah di blokir Saya maaf telah menginstal aplikasi pihak thard karena kesalahan. Saya meminta untuk membuka blokir akun saya. Tolong bantu saya untuk membuka blokirnya sesegera mungkin. Terimakasih` // Isi nya apa bro
};

transporter.sendMail(mailOptions, function(error,info) {
    if (error) {
        reject(error)
    } else {
        resolve({
        status: true,
        result: 'Unbanned Sedang Di Request, Tunggu 24 Jam Jika Belum Ke Unban Coba Ulangi Lagi',
      email: `Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. 
Anda dapat mengunjungi situs web kami untuk mengunduh WhatsApp atau aplikasi WhatsApp Business. 
Anda dapat mempelajari selengkapnya mengenai cara menggunakan WhatsApp secara bertanggung jawab di artikel Pusat Bantuan ini.

Catatan: Kami tidak menyediakan dukungan untuk aplikasi, perangkat, atau versi WhatsApp yang tidak didukung, atau perangkat yang di-jailbreak atau di-root. Pelajari selengkapnya mengenai sistem operasi yang didukung di artikel ini. Untuk informasi selengkapnya mengenai aplikasi tidak resmi dan alasan kami tidak mendukung aplikasi tersebut, silakan baca artikel ini.

-- 
Tim Dukungan WhatsApp

Silakan kunjungi Pusat Bantuan kami.`
        })
    }
});
})
}