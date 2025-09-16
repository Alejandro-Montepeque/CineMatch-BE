import { Router } from 'express';
import { obtenerPeliculas, obtainGenresMovies, obtainDecadesMovies } from '../controllers/movie.controller';

const router = Router();

router.get('/movies', obtenerPeliculas);

router.get('/genres', obtainGenresMovies);

router.get('/decades', obtainDecadesMovies);

export default router;