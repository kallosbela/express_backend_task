const express = require("express");
const router = express.Router();
const db = require("../database")

// GET endpoint for ME table
router.get("/", (req, res) => {
  db.query("SELECT * FROM ME", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// POST endpoint for ME table
router.post("/", (req, res) => {
  const { KOD, NEV } = req.body;
  db.query(
    "INSERT INTO ME (KOD, NEV) VALUES (?, ?)",
    [KOD, NEV],
    (err, result) => {
      if (err) throw err;
      res.send("ME record inserted.");
    }
  );
});

// Update endpoint for ME table
router.put('/:KOD', (req, res) => {
  const KOD = req.params.KOD;
  const { NEV } = req.body;
  
  db.query('UPDATE ME SET NEV = ? WHERE KOD = ?', [NEV, KOD], (err, result) => {
    if (err) throw err;
    res.send(`ME record with KOD ${KOD} updated.`);
  });
});

// Delete endpoint for ME table
router.delete('/:KOD', (req, res) => {
  const KOD = req.params.KOD;

  db.query('DELETE FROM ME WHERE KOD = ?', [KOD], (err, result) => {
    if (err) throw err;
    res.send(`ME record with KOD ${KOD} deleted.`);
  });
});

module.exports = router