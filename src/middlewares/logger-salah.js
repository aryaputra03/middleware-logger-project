function loggerSalah(req, res, next) {
  const start = process.hrtime();
  next(); // next() dipanggil duluan, baru dihitung durasinya
  const diff = process.hrtime(start);
  const durationMs = (diff[0] * 1000 + diff[1] / 1e6).toFixed(2);
  console.log(`Durasi (cara salah): ${durationMs}ms`);
}
