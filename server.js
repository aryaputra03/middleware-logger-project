const express = require("express");
const routes = require("./src/routes/index");
const loggerMiddleware = require("./src/middlewares/logger");

const app = express();
app.disable("etag");
const PORT = 3000;

app.use(loggerMiddleware); // HARUS di atas, sebelum express.json() dan routes
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
