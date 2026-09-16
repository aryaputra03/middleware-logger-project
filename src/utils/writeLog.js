const fs = require("fs");
const path = require("path");

const LOG_DIR = path.join(__dirname, "..", "..", "logs");
const LOG_FILE = path.join(LOG_DIR, "access.log");

// Pastikan folder logs/ ada sebelum menulis
if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

function writeLog(logLine) {
  fs.appendFile(LOG_FILE, logLine + "\n", (err) => {
    if (err) {
      console.error("Gagal menulis log:", err.message);
    }
  });
}

module.exports = writeLog;
