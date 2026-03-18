import express from "express";
import cors from "cors";
import db from "./models/index.js";
import registerRoutes from "./routes/IndexRoutes.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// Sync models (do NOT use in production without review)
// You can comment out sync() after the first run if you prefer migrations.
try {
  await db.sequelize.sync();
  console.log("Sequelize models synced successfully.");
} catch (error) {
  console.warn("Sequelize sync failed (database may not be configured yet):", error.message);
}

// ruta de prueba
app.get("/", (req, res) => {
  res.send("API de Gazfast funcionando");
});

// Registrar todas las rutas de API
registerRoutes(app);

export default app;
