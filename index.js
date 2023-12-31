const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

const loginRoutes = require("./routes/loginRoutes");
const meRoutes = require("./routes/meRoutes");
const cikkRoutes = require("./routes/cikkRoutes");
const tetelekRoutes = require("./routes/tetelekRoutes");

app.use("/api/login", loginRoutes);
app.use("/api/me", meRoutes);
app.use("/api/cikk", cikkRoutes);
app.use("/api/tetelek", tetelekRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});