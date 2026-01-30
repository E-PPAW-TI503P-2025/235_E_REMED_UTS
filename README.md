# 📚 SIPER KAMPUS - Sistem Informasi Perpustakaan

![NodeJS](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-Sequelize-4479A1?style=for-the-badge&logo=mysql)
![Frontend](https://img.shields.io/badge/Frontend-Professional_Dashboard-2563eb?style=for-the-badge&logo=html5)

> **Project Remedial UCP 1 - Pengembangan Aplikasi Web (PAW)**
>
> Sistem manajemen perpustakaan modern dengan fitur pelacakan lokasi (Geolocation) saat peminjaman buku. Dibangun dengan backend Node.js yang kuat, database MySQL, dan antarmuka Dashboard profesional.

---

## 📑 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Teknologi](#-teknologi)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Dokumentasi API Detail](#-dokumentasi-api-detail)
- [Struktur Database](#-struktur-database)
- [Galeri Aplikasi & Screenshot](#-galeri-aplikasi--screenshot)

---

## 🚀 Fitur Utama

### 🔐 1. Role-Based Access (Simulasi)
Sistem membedakan hak akses antara **Administrator** dan **Mahasiswa (User)** menggunakan header simulasi.
- **Admin:** Akses penuh (CRUD Buku, Lihat Log Peminjaman, Cek Lokasi Peminjam).
- **User:** Akses terbatas (Lihat Katalog, Pinjam Buku dengan Geolocation).

### 📍 2. Geolocation Tracking
Setiap kali mahasiswa meminjam buku, sistem otomatis:
- Meminta izin akses GPS browser.
- Merekam koordinat **Latitude & Longitude**.
- Menyimpan data lokasi ke database `BorrowLogs` untuk keperluan audit.

### 🛠 3. Manajemen Buku (CRUD)
Admin dapat mengelola koleksi buku dengan fitur **Edit Terpisah** (Inline Edit) yang modern:
- Edit Judul, Penulis, dan Stok secara independen menggunakan ikon interaktif.
- Hapus buku dengan konfirmasi keamanan.

### 📊 4. Dashboard Profesional
Antarmuka pengguna (UI) didesain dengan gaya *Enterprise Dashboard*:
- Sidebar Navigasi Responsif.
- Card Layout yang rapi.
- Indikator Stok (Badge warna otomatis berubah jika stok habis).

---

## 💻 Teknologi

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Backend** | Node.js & Express | Server utama dan Routing API RESTful |
| **Database** | MySQL & Sequelize | ORM untuk manajemen relasi dan migrasi database |
| **Frontend** | HTML5, CSS3, Vanilla JS | UI Dashboard interaktif tanpa framework berat |
| **Icons** | Remix Icon | Set ikon modern untuk antarmuka pengguna |
| **Font** | Inter | Tipografi standar aplikasi profesional |

---

## ⚙️ Instalasi & Penggunaan

Ikuti langkah berikut untuk menjalankan aplikasi di komputer lokal:

1. **Clone Repository**
   ```bash
   git clone [https://github.com/USERNAME_GITHUB_KAMU/20230140235_E_REMED_UTS.git](https://github.com/USERNAME_GITHUB_KAMU/20230140235_E_REMED_UTS.git)
   cd 20230140235_E_REMED_UTS

2.Install Dependencies

Bash
npm install

Setup Database

Pastikan MySQL berjalan (via XAMPP/Laragon).

Buat database baru bernama library_remed_db.

Sesuaikan konfigurasi (username/password) di file config/config.json

4.Migrasi Database

Bash
npx sequelize-cli db:migrate

5.Jalankan Server

Bash
npm start (Akses aplikasi di browser: http://localhost:300)

Dokumentasi API Detail
Berikut adalah detail Request dan Response untuk setiap endpoint dalam format JSON. Gunakan Postman untuk pengujian.

1. 🟢 GET Semua Buku (Public)
Mengambil daftar seluruh buku yang tersedia.

URL: /api/books

Method: GET

Response Success (200 OK):

JSON
[
  {
    "id": 1,
    "title": "Pemrograman Web Lanjut",
    "author": "Muhammad Haris",
    "stock": 10,
    "createdAt": "2026-01-30T06:00:00.000Z",
    "updatedAt": "2026-01-30T06:00:00.000Z"
  }
]


Tentu, Haris. Saya paham maksudmu. Kamu ingin dokumentasi yang sangat detail di bagian API (menampilkan contoh JSON Request & Response) agar dosenmu melihat ini benar-benar lengkap seperti dokumentasi engineer profesional.

Berikut adalah UPDATE FINAL README.md yang paling lengkap.

Bagian API sekarang menampilkan Kodingan JSON (apa yang harus dikirim dan apa jawaban server).

Bagian Screenshot sudah saya beri teks besar [GANTI DENGAN SCREENSHOT ...] agar kamu tidak bingung menaruhnya.

Silakan Copy Semua kode di bawah ini dan Paste ke GitHub-mu.

Markdown
# 📚 SIPER KAMPUS - Sistem Informasi Perpustakaan

![NodeJS](https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-Sequelize-4479A1?style=for-the-badge&logo=mysql)
![Frontend](https://img.shields.io/badge/Frontend-Professional_Dashboard-2563eb?style=for-the-badge&logo=html5)

> **Project Remedial UCP 1 - Pengembangan Aplikasi Web (PAW)**
>
> Sistem manajemen perpustakaan modern dengan fitur pelacakan lokasi (Geolocation) saat peminjaman buku. Dibangun dengan backend Node.js yang kuat, database MySQL, dan antarmuka Dashboard profesional.

---

## 📑 Daftar Isi
- [Fitur Utama](#-fitur-utama)
- [Teknologi](#-teknologi)
- [Instalasi & Penggunaan](#-instalasi--penggunaan)
- [Dokumentasi API Detail](#-dokumentasi-api-detail)
- [Struktur Database](#-struktur-database)
- [Galeri Aplikasi & Screenshot](#-galeri-aplikasi--screenshot)

---

## 🚀 Fitur Utama

### 🔐 1. Role-Based Access (Simulasi)
Sistem membedakan hak akses antara **Administrator** dan **Mahasiswa (User)** menggunakan header simulasi.
- **Admin:** Akses penuh (CRUD Buku, Lihat Log Peminjaman, Cek Lokasi Peminjam).
- **User:** Akses terbatas (Lihat Katalog, Pinjam Buku dengan Geolocation).

### 📍 2. Geolocation Tracking
Setiap kali mahasiswa meminjam buku, sistem otomatis:
- Meminta izin akses GPS browser.
- Merekam koordinat **Latitude & Longitude**.
- Menyimpan data lokasi ke database `BorrowLogs` untuk keperluan audit.

### 🛠 3. Manajemen Buku (CRUD)
Admin dapat mengelola koleksi buku dengan fitur **Edit Terpisah** (Inline Edit) yang modern:
- Edit Judul, Penulis, dan Stok secara independen menggunakan ikon interaktif.
- Hapus buku dengan konfirmasi keamanan.

### 📊 4. Dashboard Profesional
Antarmuka pengguna (UI) didesain dengan gaya *Enterprise Dashboard*:
- Sidebar Navigasi Responsif.
- Card Layout yang rapi.
- Indikator Stok (Badge warna otomatis berubah jika stok habis).

---

## 💻 Teknologi

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Backend** | Node.js & Express | Server utama dan Routing API RESTful |
| **Database** | MySQL & Sequelize | ORM untuk manajemen relasi dan migrasi database |
| **Frontend** | HTML5, CSS3, Vanilla JS | UI Dashboard interaktif tanpa framework berat |
| **Icons** | Remix Icon | Set ikon modern untuk antarmuka pengguna |
| **Font** | Inter | Tipografi standar aplikasi profesional |

---

## ⚙️ Instalasi & Penggunaan

Ikuti langkah berikut untuk menjalankan aplikasi di komputer lokal:

1. **Clone Repository**
   ```bash
   git clone [https://github.com/USERNAME_GITHUB_KAMU/20230140235_E_REMED_UTS.git](https://github.com/USERNAME_GITHUB_KAMU/20230140235_E_REMED_UTS.git)
   cd 20230140235_E_REMED_UTS
Install Dependencies

Bash
npm install
Setup Database

Pastikan MySQL berjalan (via XAMPP/Laragon).

Buat database baru bernama library_remed_db.

Sesuaikan konfigurasi (username/password) di file config/config.json.

Migrasi Database

Bash
npx sequelize-cli db:migrate
Jalankan Server

Bash
npm start
Akses aplikasi di browser: http://localhost:3000

📡 Dokumentasi API Detail
Berikut adalah detail Request dan Response untuk setiap endpoint dalam format JSON. Gunakan Postman untuk pengujian.

1. 🟢 GET Semua Buku (Public)
Mengambil daftar seluruh buku yang tersedia.

URL: /api/books

Method: GET

Response Success (200 OK):

JSON
[
  {
    "id": 1,
    "title": "Pemrograman Web Lanjut",
    "author": "Muhammad Haris",
    "stock": 10,
    "createdAt": "2026-01-30T06:00:00.000Z",
    "updatedAt": "2026-01-30T06:00:00.000Z"
  }
]
2.Tambah Buku Baru (Admin)
URL: /api/books

Method: POST

Headers: x-user-role: admin

Request Body: 
{
    "title": "Belajar Node.js",
    "author": "John Doe",
    "stock": 15
}

Response Success (201 Created):
{
    "message": "Buku berhasil ditambahkan",
    "data": { ... }
}

3. Update Buku (Admin)
URL: /api/books/:id

Method: PUT

Headers: x-user-role: admin

Request Body:
{
    "title": "Belajar Node.js (Edisi Revisi)",
    "author": "John Doe",
    "stock": 20
}

4.  Hapus Buku (Admin)
URL: /api/books/:id

Method: DELETE

Headers: x-user-role: admin

Response:
{
    "message": "Buku berhasil dihapus"
}


5.  Pinjam Buku (User - Geolocation)
URL: /api/borrow

Method: POST

Headers: x-user-role: user, x-user-id: 101

Request Body:
{
    "bookId": 1,
    "latitude": -6.200000,
    "longitude": 106.816666
}
Response Success (200 OK):
{
    "message": "Peminjaman berhasil",
    "bookTitle": "Pemrograman Web Lanjut",
    "sisaStok": 9,
    "locationRec": {
        "lat": -6.200000,
        "long": 106.816666
    }
}


6. Lihat Log Peminjaman (Admin)
URL: /api/logs

Method: GET

Headers: x-user-role: admin


Struktur Database
Berikut adalah bukti struktur database yang digunakan dalam aplikasi (Hasil migrasi Sequelize).

Tabel Books & BorrowLogs (MySQL Workbench):
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/540c5450-bdda-471a-be12-dc5cf4113a38" />

Bukti Testing Postman (GET Books):
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1eba17f3-7cb9-4aff-b8ba-539dcf882f57" />


📸 Galeri
1. Dashboard Administrator



