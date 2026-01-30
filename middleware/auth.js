const isAdmin = (req, res, next) => {
    // Mengecek apakah di header ada tulisan role 'admin'
    const role = req.headers['x-user-role'];
    if (role === 'admin') {
        next(); // Boleh lanjut
    } else {
        res.status(403).json({ message: "Akses Ditolak: Khusus Admin" });
    }
};

const isUser = (req, res, next) => {
    // Mengecek apakah di header ada tulisan role 'user'
    const role = req.headers['x-user-role'];
    if (role === 'user') {
        next(); // Boleh lanjut
    } else {
        res.status(403).json({ message: "Akses Ditolak: Khusus User" });
    }
};


module.exports = { isAdmin, isUser };