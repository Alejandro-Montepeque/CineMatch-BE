import { Request, Response } from 'express';

import movieModel from '../models/movie.model';

export const obtenerPeliculas = async(req: Request, res: Response) => {
    try {
        // parametros para el paginado
        const page = Number(req.query.page) || 1;

        // limite por paginado
        const limit = Number(req.query.limit) || 12;
        const skip = (page - 1) * limit;

        // Consultar por páginas
        const peliculas = await movieModel.find({}, 'title plot year genres countries poster runtime').skip(skip).limit(limit);

        // Total de peliculas
        const total = await movieModel.countDocuments();

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

export const obtainGenresMovies = async(req: Request, res: Response)=>{
    try {
        let genres = await movieModel.distinct("genres");

        genres = genres.sort((a: string, b:string)=> a.localeCompare(b))

        res.json({
            success: true,
            data: genres
        })

    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los generos de las peliculas'})
    }
}

export const obtainDecadesMovies = async (req: Request, res: Response) => {
  try {
    const decades = await movieModel.aggregate([
      {
        //Filtra solo las peliculas que poseen años de tipo número
        $match: {
          year: { $type: "number" } //Con esto ignora los valaores de string, null o valores que no son de tipo número
        }
      },
      {
        //Aqui se calcula el número de cada década para cada pelicula
        $project: {
          decadeNumber: {
            $multiply: [
                /*Divide el año entre 10 y redondea hacia abajo a su vez multiplica por 10 parwa obtener la década exacta */
              { $floor: { $divide: ["$year", 10] } },
              10
            ]
          }
        }
      },
      {
        //Agrupa por década calculada para obtener solo décadas únicas
        $group: {
          _id: "$decadeNumber"
        }
      },
      {
        //Agrega la "s" al final de cada opción
        $project: {
          _id: 0,
          id: { $concat: [{ $toString: "$_id" }, "s"] }
        }
      },
      {
        //Ordenada las décadas de forma ascendente (cronologicamente)
        $sort: { decade: 1 }
      }
    ]);

    res.json({
      success: true,
      data: decades
    });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las décadas de las películas" });
  }
};