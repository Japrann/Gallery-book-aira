# Website Galeri Buku untuk Pasangan

Selamat datang di Website Galeri Buku untuk Pasangan! Website ini adalah ruang pribadi bagi Anda dan pasangan untuk menyimpan dan menampilkan kenangan dalam format galeri buku yang elegan.

## Fitur

- **Desain Simpel dan Elegan**: Tampilan yang bersih dan modern, fokus pada kenangan Anda.
- **Fitur Passcode**: Menjaga privasi galeri Anda agar hanya dapat diakses oleh Anda dan pasangan.
- **Mudah Disesuaikan**: Anda dapat dengan mudah mengubah passcode, judul, deskripsi, dan gambar buku.

## Cara Menggunakan

### 1. Mengubah Passcode

Passcode awal diatur ke `"1234"`. Untuk mengubahnya, ikuti langkah-langkah berikut:

1.  Buka file `public/script.js`.
2.  Cari baris berikut:
    ```javascript
    const correctPasscode = "1234"; // Ganti dengan passcode yang Anda inginkan
    ```
3.  Ubah `"1234"` menjadi passcode baru yang Anda inginkan. Simpan file tersebut.

### 2. Menambahkan atau Mengubah Konten Buku

Semua data buku disimpan dalam file `public/script.js`.

1.  Buka file `public/script.js`.
2.  Cari variabel `books`:
    ```javascript
    const books = [
        {
            "image": "images/book1.jpg",
            "title": "Buku Kenangan Pertama",
            "description": "Ini adalah deskripsi singkat tentang buku kenangan pertama kita. Momen-momen yang tak terlupakan."
        },
        // ... buku lainnya
    ];
    ```
3.  Untuk **mengubah** data buku yang ada, cukup edit nilai `title` dan `description`.
4.  Untuk **menambahkan** buku baru, salin salah satu blok objek (dari `{` hingga `}`) dan tempelkan di dalam array `books`. Pastikan untuk menambahkan koma di antara setiap objek. Ubah `image`, `title`, dan `description` sesuai keinginan Anda.

### 3. Mengganti Gambar

1.  Siapkan file gambar Anda (format `.jpg`, `.png`, dll.).
2.  Pindahkan file gambar tersebut ke dalam direktori `public/images`.
3.  Perbarui path gambar di dalam variabel `books` di `public/script.js` agar sesuai dengan nama file gambar yang baru.

## Menjalankan Website Secara Lokal

Untuk melihat website ini, Anda tidak memerlukan server web khusus. Cukup buka file `public/index.html` di browser web Anda.

---

Dibuat dengan ❤️ oleh Jules.
