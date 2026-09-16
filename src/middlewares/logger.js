const writeLog = require("../utils/writeLog");
const formatLogLine = require("../utils/formatLog");

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

    const logLine = formatLogLine({
      timestamp,
      method,
      url,
      ip,
      userAgent,
      statusCode: res.statusCode,
      durationMs,
    });

    console.log(logLine);
    writeLog(logLine);
  });

  next();
}

module.exports = loggerMiddleware;
