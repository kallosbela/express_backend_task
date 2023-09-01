const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const meRoutes = require("./routes/meRoutes");
const cikkRoutes = require("./routes/cikkRoutes");
const tetelekRoutes = require("./routes/tetelekRoutes");

app.use("/api/me", meRoutes);
app.use("/api/cikk", cikkRoutes);
app.use("/api/tetelek", tetelekRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
