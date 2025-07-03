const Movie = require('../models/movie')

const obtenerPeliculas = async(req, res) => {
    try {
        //parametros para el paginado
        const page = parseInt(req.query.page) || 1;
        //limite por paginado
        const limit =parseInt(req.query.limit) || 12;
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

module.exports = { obtenerPeliculas }