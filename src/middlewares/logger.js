const writeLog = require("../utils/writeLog");

function loggerMiddleware(req, res, next) {
  const startTime = process.hrtime();
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip;
  const userAgent = req.headers["user-agent"];

  res.on("finish", () => {
    const diff = process.hrtime(startTime);
    const durationMs = (diff[0] * 1000 + diff[1] / 1e6).toFixed(2);

    const logLine = `[${timestamp}] ${method} ${url} - IP: ${ip} - UA: ${userAgent} - Status: ${res.statusCode} - ${durationMs}ms`;

    console.log(logLine); // tetap tampil di console untuk development
    writeLog(logLine); // sekaligus ditulis ke file
  });

  next();
}

module.exports = loggerMiddleware;
