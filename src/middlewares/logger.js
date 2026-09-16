function loggerMiddleware(req, res, next) {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const ip = req.ip;
  const userAgent = req.headers["user-agent"];

  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip} - UA: ${userAgent}`);

  next(); // WAJIB dipanggil, atau request akan menggantung
}

module.exports = loggerMiddleware;
