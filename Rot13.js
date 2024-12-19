// Fungsi untuk mengenkripsi atau mendekripsi plaintext menggunakan ROT13
function rot13(plaintext) {
    // Membuat string kosong untuk ciphertext
    let ciphertext = "";
    
    // Loop melalui setiap karakter dari plaintext
    for (let i = 0; i < plaintext.length; i++) {
        // Mendapatkan kode ASCII dari karakter saat ini
        let code = plaintext.charCodeAt(i);
        
        // Memeriksa apakah karakter tersebut huruf kapital
        if (code >= 65 && code <= 90) {
            // Menambahkan 13 ke kode dan memutar jika melebihi 90
            code = (code - 65 + 13) % 26 + 65;
        }
        // Memeriksa apakah karakter tersebut huruf kecil
        else if (code >= 97 && code <= 122) {
            // Menambahkan 13 ke kode dan memutar jika melebihi 122
            code = (code - 97 + 13) % 26 + 97;
        }
        
        // Mengkonversi kode kembali ke karakter dan menambahkannya ke ciphertext
        ciphertext += String.fromCharCode(code);
    }
    
    // Mengembalikan ciphertext
    return ciphertext;
}
