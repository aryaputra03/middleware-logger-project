# Custom Middleware & Request Logger System

Proyek pembelajaran Express.js yang berfokus pada mekanisme middleware,
dengan studi kasus sistem logging internal.

## Cara Menjalankan

\`\`\`bash
npm install
npm run dev
\`\`\`

Server berjalan di `http://localhost:3000`.

## Endpoint yang Tersedia

- `GET /` — halaman utama
- `GET /users` — daftar user (dummy)
- `POST /users` — buat user (dummy)
- `GET /error-test` — sengaja memicu error, untuk menguji error handling

## Format Log

Setiap request tercatat di `logs/access.log` dengan format:

\`\`\`
[timestamp] METHOD /path - IP - "User-Agent" - status - durasiMs
\`\`\`

Contoh:
\`\`\`
[2026-09-16T10:30:12.001Z] GET /users - ::1 - "curl/8.4.0" - 200 - 2.14ms
\`\`\`

## Yang Dipelajari

- Urutan eksekusi middleware dan pentingnya `next()`
- Pengukuran durasi respon akurat lewat event `res.on('finish')`
- Ekstraksi header HTTP dari `req.headers`
- Penulisan file asynchronous (non-blocking) dengan `fs.appendFile`
- Error handling middleware Express (4 parameter)
