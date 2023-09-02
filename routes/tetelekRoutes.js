const express = require("express");
const router = express.Router();
const db = require("../database");

// GET endpoint for TETELEK table
router.get("/", (req, res) => {
  db.query("SELECT * FROM TETELEK", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
    res.json(results);
  });
});

// POST endpoint for TETELEK table
router.post("/", (req, res) => {
  const { CSZ, MENNYISEG, EGYSEGAR } = req.body;
  db.query(
    "INSERT INTO TETELEK (CSZ, MENNYISEG, EGYSEGAR) VALUES (?, ?, ?)",
    [CSZ, MENNYISEG, EGYSEGAR],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      }
      res.status(201).send(result);
    }
  );
});

// Update endpoint for TETELEK table
router.put("/:ID", (req, res) => {
  const ID = req.params.ID;
  const { CSZ, MENNYISEG, EGYSEGAR } = req.body;

  db.query(
    "UPDATE TETELEK SET CSZ = ?, MENNYISEG = ?, EGYSEGAR = ? WHERE ID = ?",
    [CSZ, MENNYISEG, EGYSEGAR, ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
      }
      res.send(`TETELEK record with ID ${ID} updated.`);
    }
  );
});

// Delete endpoint for TETELEK table
router.delete("/:ID", (req, res) => {
  const ID = req.params.ID;

  db.query("DELETE FROM TETELEK WHERE ID = ?", [ID], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
    }
    res.send(`TETELEK record with ID ${ID} deleted.`);
  });
});

module.exports = router;
