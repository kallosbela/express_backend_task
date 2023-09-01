const express = require("express");
const router = express.Router();
const db = require("../database");

// GET endpoint for CIKK table
router.get("/", (req, res) => {
  db.query("SELECT * FROM CIKK", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// POST endpoint for CIKK table
router.post("/", async (req, res) => {
  const { CSZ, NEV, ME } = req.body;
  db.query(
    "INSERT INTO CIKK (CSZ, NEV, ME) VALUES (?, ?, ?)",
    [CSZ, NEV, ME],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      }
      res.send("CIKK record inserted.");
    }
  );
});

// Update endpoint for CIKK table
router.put("/:CSZ", (req, res) => {
  const CSZ = req.params.CSZ;
  const { NEV } = req.body;

  db.query(
    "UPDATE CIKK SET NEV = ? WHERE KOD = ?",
    [NEV, KOD],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
      }
      res.send(`CIKK record with KOD ${KOD} updated.`);
    }
  );
});

// Delete endpoint for CIKK table
router.delete("/:KOD", (req, res) => {
  const KOD = req.params.KOD;

  db.query("DELETE FROM CIKK WHERE KOD = ?", [KOD], (err, result) => {
    if (err) throw err;
    res.send(`CIKK record with KOD ${KOD} deleted.`);
  });
});

module.exports = router;
