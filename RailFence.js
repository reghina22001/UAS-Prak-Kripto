function encryptRailFence(plaintext, rail, offset) {
  const length = plaintext.length;
  // Membuat matriks (fence) dengan ukuran rail x length dan mengisi dengan karakter '.'
  const fence = new Array(rail).fill().map(() => new Array(length).fill('.'));
  // Menentukan baris awal dan arah pergerakan dalam matriks
  let row = offset % rail, direction = 1;

  // Mengisi matriks dengan karakter plaintext sesuai dengan pola rail fence
  for (let i = 0; i < length; i++) {
    fence[row][i] = plaintext[i];

    // Mengubah arah pergerakan jika sudah mencapai batas atas atau bawah matriks
    if (row === 0) {
      direction = 1;
    } else if (row === rail - 1) {
      direction = -1;
    }

    // Menggerakkan ke baris berikutnya sesuai arah pergerakan
    row += direction;
  }

  // Menggabungkan karakter-karakter dari matriks menjadi string terenkripsi
  let encryptedText = '';
  for (let i = 0; i < rail; i++) {
    for (let j = 0; j < length; j++) {
      if (fence[i][j] !== '.') {
        encryptedText += fence[i][j];
      }
    }
  }

  // Mengembalikan teks terenkripsi
  return encryptedText;
}

function decryptRailFence(encryptedText, rail, offset) {
  const length = encryptedText.length;
  // Membuat matriks (fence) dengan ukuran rail x length dan mengisi dengan karakter '.'
  const fence = new Array(rail).fill().map(() => new Array(length).fill('.'));
  // Menentukan baris awal dan arah pergerakan dalam matriks
  let row = offset % rail, direction = 1;

  // Mengisi matriks dengan karakter 'X' sebagai placeholder untuk teks terdekripsi
  for (let i = 0; i < length; i++) {
    fence[row][i] = 'X';

    // Mengubah arah pergerakan jika sudah mencapai batas atas atau bawah matriks
    if (row === 0) {
      direction = 1;
    } else if (row === rail - 1) {
      direction = -1;
    }

    // Menggerakkan ke baris berikutnya sesuai arah pergerakan
    row += direction;
  }

  let index = 0;
  // Mengisi matriks dengan karakter terenkripsi sesuai pola rail fence
  for (let i = 0; i < rail; i++) {
    for (let j = 0; j < length; j++) {
      if (fence[i][j] === 'X' && index < length) {
        fence[i][j] = encryptedText[index++];
      }
    }
  }

  // Mengembalikan teks terdekripsi
  let decryptedText = '';
  row = offset % rail;
  direction = 1;
  for (let i = 0; i < length; i++) {
    decryptedText += fence[row][i];

    // Mengubah arah pergerakan jika sudah mencapai batas atas atau bawah matriks
    if (row === 0) {
      direction = 1;
    } else if (row === rail - 1) {
      direction = -1;
    }

    // Menggerakkan ke baris berikutnya sesuai arah pergerakan
    row += direction;
  }

  // Mengembalikan teks terdekripsi
  return decryptedText;
}
