const express = require("express");
const routes = require("./src/routes/index");
const loggerMiddleware = require("./src/middlewares/logger");

const app = express();
app.disable("etag");
const PORT = 3000;

app.use(loggerMiddleware); // HARUS di atas, sebelum express.json() dan routes
app.use(express.json());
app.use("/", routes);

// Error handler - HARUS diletakkan paling akhir, setelah semua route
app.use((err, req, res, next) => {
  console.error("Error tertangkap:", err.message);
  res.status(500).json({ error: "Terjadi kesalahan pada server" });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
