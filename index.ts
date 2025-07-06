import app from "./src/app";
import { environments } from "./src/config/environments";
import { MongoDB } from "./src/config/database";

MongoDB.connect({
  uri: environments.MONGODB_URI,
  dbName: environments.MONGODB_DBNAME,
});

const PORT = environments.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
