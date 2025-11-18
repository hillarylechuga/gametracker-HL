require("dotenv").config({ override: true });

console.log("🔎 MONGO_URI cargado:", process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
const resenasRoutes = require("./routes/resena");
app.use("/api/resenas", resenasRoutes);

// Conexión a Mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((err) => console.error("❌ Error de conexión:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor en puerto ${PORT}`));
 
app.get("/", (req, res) => {
  res.send("🚀 Backend funcionando correctamente");
});

