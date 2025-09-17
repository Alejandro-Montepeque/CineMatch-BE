# CineMatch

El propósito del proyecto es servir todo el contenido relacionado a películas desde una base de datos no relacional de MongoDB. Su creación es meramente práctica y escalar.

## Requisitos previos

- **Node.js** instalado en tu máquina
- Cuenta en MongoDB Atlas y un cluster configurado
- **Git** instalado en tu máquina
- **Docker y Docker Compose** opcional, para levantar el proyecto en contenedores

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

| Metodo | comando | Descripción |
|---|---| --- |
| Docker | docker compose up -d --build | Levana el backend y mongoDb automáticamente |
| Node.js (local) | npm run dev | Ejecuta la aplicación en modo desarrollo |
| Node.js (local) | npm start | Ejecuta  la apliación en modo producción |

### Scripts disponibles

| Script | Descripción |
|---|---|
| dev | Ejecuta la aplicación en modo desarrollo utilizando nodemon |
| start | Ejecuta la aplicación en modo producción utilizando node |

### Endpoints de la API

| Endpoint | Método | Descripción |
|---|---| --- |
| /api/movies | GET | Mostrar listado de películas |
| /api/genres | GET | Mostrar listado de géneros disponibles |
| /api/decades | GET | Mostrar listado de décadas disponibles |

### Ejemplos de solicitudes

**Mostrar listado de películas**

```sh
curl -X GET "http://localhost:3000/api/movies"
```
**Obtener listado de películas paginadas**

```sh
curl -X GET "http://localhost:3000/api/movies?page=2&limit=15"
```
**Mostrar listado de generos**

```sh
curl -X GET "http://localhost:3000/api/genres"
```
**Mostrar listado de décadas**

```sh
curl -X GET "http://localhost:3000/api/decades"
```
