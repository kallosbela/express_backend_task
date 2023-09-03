const express = require("express");
const router = express.Router();
const db = require("../database");

// GET endpoint for CIKK table
router.get("/", (req, res) => {
  db.query("SELECT * FROM CIKK", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
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
router.put("/:CSZ_", (req, res) => {
  const CSZ_ = req.params.CSZ_;
  const { CSZ, NEV, ME } = req.body;

  db.query(
    "UPDATE CIKK SET CSZ = ?, NEV = ?, ME = ? WHERE CSZ = ?",
    [CSZ, NEV, ME, CSZ_],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.sqlMessage);
      }
      res.send(`CIKK record with CSZ ${CSZ_} updated.`);
    }
  );
});

// Delete endpoint for CIKK table
router.delete("/:CSZ", (req, res) => {
  const CSZ = req.params.CSZ;

  db.query("DELETE FROM CIKK WHERE CSZ = ?", [CSZ], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
    res.send(`CIKK record with CSZ ${CSZ} deleted.`);
  });
});

module.exports = router;
