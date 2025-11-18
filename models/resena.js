const mongoose = require("mongoose");

const ResenaSchema = new mongoose.Schema({
  juego: { type: String, required: true },
  texto: { type: String, required: true },
  puntuacion: { type: Number, required: true },
  imagen: { type: String } // ⚠️ ESTA LÍNEA PERMITE GUARDAR LA IMAGEN
});

module.exports = mongoose.model("Resena", ResenaSchema);
