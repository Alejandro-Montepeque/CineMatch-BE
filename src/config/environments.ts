import 'dotenv/config';
import * as env from 'env-var';

export const environments = {
    PORT: env.get('PORT').required().asPortNumber(),
    MONGODB_URI: env.get('MONGODB_URI').required().asString(),
    MONGODB_DBNAME: env.get('MONGODB_DBNAME').required().asString(),
};
