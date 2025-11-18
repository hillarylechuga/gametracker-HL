const express = require("express");
const Resena = require("../models/resena");

const router = express.Router();

// ==============================
// 👉 Obtener todas las reseñas
// ==============================
router.get("/", async (req, res) => {
  try {
    const todas = await Resena.find();
    res.json(todas);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener reseñas" });
  }
});

// ==============================
// 👉 Crear una nueva reseña
// ==============================
router.post("/", async (req, res) => {
  try {
    console.log("📸 Recibido en backend:", req.body);

    const nueva = new Resena({
      juego: req.body.juego,
      texto: req.body.texto,
      puntuacion: req.body.puntuacion,
      imagen: req.body.imagen || ""
    });

    await nueva.save();
    res.status(201).json(nueva);

  } catch (err) {
    res.status(400).json({ error: "Error al crear reseña", detalle: err });
  }
});

// ==============================
// 👉 Eliminar reseña
// ==============================
router.delete("/:id", async (req, res) => {
  try {
    await Resena.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Reseña eliminada" });

  } catch (err) {
    res.status(400).json({ error: "Error al eliminar reseña" });
  }
});

module.exports = router;




