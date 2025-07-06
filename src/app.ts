import express from "express";
import cors from "cors";

import movieRoutes from "./routes/movie.routes";

const app = express();

// Middleware para parsear JSON
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

app.use("/api", movieRoutes);

export default app;