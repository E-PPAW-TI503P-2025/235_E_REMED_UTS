const express = require('express');
const cors = require('cors');
const { Book, BorrowLog } = require('./models'); // Import model Sequelize
const { isAdmin, isUser } = require('./middleware/auth'); // Import middleware

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// === PENTING: MENYAJIKAN FILE FRONTEND ===
app.use(express.static('public')); 

// === ROUTES PUBLIC ===
// 1. GET Semua Buku
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. GET Detail Buku
app.get('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// === ROUTES ADMIN (Header: x-user-role: admin) ===

// 3. POST Tambah Buku
app.post('/api/books', isAdmin, async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        if (!title || !author || !stock) return res.status(400).json({ message: "Data tidak boleh kosong" });

        const newBook = await Book.create({ title, author, stock });
        res.status(201).json({ message: "Buku berhasil ditambahkan", data: newBook });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4. PUT Update Buku
app.put('/api/books/:id', isAdmin, async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });

        await book.update({ title, author, stock });
        res.json({ message: "Buku berhasil diupdate", data: book });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 5. DELETE Hapus Buku
app.delete('/api/books/:id', isAdmin, async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });

        await book.destroy();
        res.json({ message: "Buku berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 6. GET History Logs (FITUR EXTRA: Agar Admin bisa lihat lokasi peminjam)
app.get('/api/logs', isAdmin, async (req, res) => {
    try {
        const logs = await BorrowLog.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// === ROUTES USER (Header: x-user-role: user) ===

// 7. POST Peminjaman Buku (Borrow + Geolocation)
app.post('/api/borrow', isUser, async (req, res) => {
    try {
        const { bookId, latitude, longitude } = req.body;
        const userId = req.headers['x-user-id']; 

        if (!userId) return res.status(400).json({ message: "Header x-user-id diperlukan" });

        const book = await Book.findByPk(bookId);
        if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
        if (book.stock < 1) return res.status(400).json({ message: "Stok buku habis" });

        // Logic Bisnis: Kurangi Stok
        book.stock = book.stock - 1;
        await book.save();

        // Logic Bisnis: Simpan Log Lokasi
        await BorrowLog.create({
            userId: userId,
            bookId: bookId,
            borrowDate: new Date(),
            latitude: latitude,
            longitude: longitude
        });

        res.json({ 
            message: "Peminjaman berhasil", 
            bookTitle: book.title,
            sisaStok: book.stock,
            locationRec: { lat: latitude, long: longitude }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});