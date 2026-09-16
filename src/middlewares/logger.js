function loggerMiddleware(req, res, next) {
  const startTime = process.hrtime(); // catat waktu mulai, presisi tinggi
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip;
  const userAgent = req.headers["user-agent"];

  // Daftarkan listener SEBELUM next() dipanggil
  res.on("finish", () => {
    const diff = process.hrtime(startTime); // [detik, nanodetik] selisih dari startTime
    const durationMs = (diff[0] * 1000 + diff[1] / 1e6).toFixed(2);

    console.log(
      `[${timestamp}] ${method} ${url} - IP: ${ip} - UA: ${userAgent} - Status: ${res.statusCode} - ${durationMs}ms`,
    );
  });

  next();
}

module.exports = loggerMiddleware;
