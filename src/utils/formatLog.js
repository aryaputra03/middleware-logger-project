function formatLogLine({
  timestamp,
  method,
  url,
  ip,
  userAgent,
  statusCode,
  durationMs,
}) {
  const safeUserAgent = userAgent || "-"; // jaga-jaga kalau header tidak dikirim

  return `[${timestamp}] ${method} ${url} - ${ip} - "${safeUserAgent}" - ${statusCode} - ${durationMs}ms`;
}

module.exports = formatLogLine;
