import { Request, Response } from 'express';

import Movie from '../models/movie.model';

const obtenerPeliculas = async(req: Request, res: Response) => {
    try {
        // parametros para el paginado
        const page = Number(req.query.page) || 1;

        // limite por paginado
        const limit = Number(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        // Consultar por páginas
        const peliculas = await Movie.find({}, 'title plot year genres countries poster runtime').skip(skip).limit(limit);

        // Total de peliculas
        const total = await Movie.countDocuments();

        res.json({
            success: true,
            data: peliculas,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        })
    } catch ( err ) {
        res.status(500).json({ error: 'Error al obtener las peliculas' })
    }
}

export { obtenerPeliculas };