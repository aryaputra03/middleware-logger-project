const express = require("express");
const routes = require("./src/routes/index");

const app = express();
const PORT = 3000;

app.use(express.json()); // supaya bisa membaca body JSON dari POST request
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
