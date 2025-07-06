import { Router } from 'express';
import { obtenerPeliculas } from '../controllers/movie.controller';

const router = Router();

router.get('/movies', obtenerPeliculas);

export default router;