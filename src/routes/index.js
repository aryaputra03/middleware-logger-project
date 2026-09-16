const express = require("express");
const router = express.Router();

// GET / - endpoint utama
router.get("/", (req, res) => {
  res.send("Selamat datang di Middleware Logger System");
});

// GET /users - contoh endpoint mengambil data
router.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Andi" },
    { id: 2, name: "Budi" },
  ]);
});

// POST /users - contoh endpoint menerima data
router.post("/users", (req, res) => {
  res.status(201).json({ message: "User berhasil dibuat" });
});

// Endpoint untuk menguji error handling
router.get("/error-test", (req, res) => {
  throw new Error("Simulasi error untuk pengujian logger");
});

module.exports = router;
