function isRotation(str1, str2) {
    // Convert kedua string menjadi lowercase untuk membandingkan secara case insensitive
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Cek apakah panjang kedua string sama
    if (str1.length !== str2.length) {
        return false;
    }

    // Gabungkan string pertama dengan dirinya sendiri
    const gabung = str1 + str1;

    // Cek apakah string kedua merupakan substring dari hasil penggabungan
    if (gabung.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

// Contoh penggunaan fungsi
console.log(isRotation('Fahmi', 'mihaf')); // false
console.log(isRotation('World', 'rldwo')); // true
console.log(isRotation('OpenAI', 'openai')); // true
console.log(isRotation('javascript', 'scriptjava')); // true
console.log(isRotation('hendra', 'ardneh')); // false
