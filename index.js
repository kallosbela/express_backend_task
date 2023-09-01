const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

const meRoutes = require("./routes/meRoutes");
const cikkRoutes = require("./routes/cikkRoutes");
const tetelekRoutes = require("./routes/tetelekRoutes");

app.use("/me", meRoutes);
app.use("/cikk", cikkRoutes);
app.use("/tetelek", tetelekRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
