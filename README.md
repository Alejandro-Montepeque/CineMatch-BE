# CineMatch

El propósito del proyecto es servir todo el contenido relacionado a películas desde una base de datos no relacional de MongoDB. Su creación es meramente práctica y escalar.

## Requisitos previos

- **Node.js** instalado en tu máquina
- Cuenta en MongoDB Atlas y un cluster configurado
- **Git** instalado en tu máquina

## Comenzando

### Clonar el repositorio

```sh
git clone <url-del-repositorio>
cd <directorio-del-repositorio>
```

### Instalar dependencias

```sh
npm install
```

### Configurar variables de entorno

Crea un archivo `.env` en el directorio raíz del proyecto y agrega las siguientes variables de entorno:

```
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.example.mongodb.net/<nombre-de-la-base-de-datos>?retryWrites=true&w=majority
PORT=3000
```

Reemplaza <usuario>, <contraseña> y <nombre-de-la-base-de-datos> con tus credenciales de MongoDB Atlas y el nombre de tu base de datos.

## Ejecutar la aplicación

### Scripts disponibles

| Script | Descripción |
|---|---|
| dev | Ejecuta la aplicación en modo desarrollo utilizando nodemon |
| start | Ejecuta la aplicación en modo producción utilizando node |

### Endpoints de la API

| Endpoint | Método | Descripción |
|---|---| --- |
| /api | GET | Mostrar mensaje de bienvenida |
| /api/peliculas | GET | Mostrar listado de películas |

### Ejemplos de solicitudes

**Mostrar mensaje de bienvenida**

```sh
curl -X GET "http://localhost:3000/api/"
```

**Mostrar listado de películas**

```sh
curl -X GET "http://localhost:3000/api/peliculas"
```

**Obtener listado de películas paginadas**

```sh
curl -X GET "http://localhost:3000/api/peliculas?page=2&limit=15"
```
