import cors from "cors";
import express from "express";
import movieRoutes from "./routes/movie.routes";

const app = express();

// Middleware para parsear JSON
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Ruta principal test
app.get("/", (_req, res) => {
  res.send("API Ready to use");
});

app.use("/api", movieRoutes);

export default app;