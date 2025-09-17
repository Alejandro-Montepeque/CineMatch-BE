import * as env from 'env-var';

export const environments = {
    PORT: env.get('PORT').default('3000').asPortNumber(),
    MONGODB_URI: env.get('MONGODB_URI').required().asString(),
    MONGODB_DBNAME: env.get('MONGODB_DBNAME').default('sample_mflix').asString(),
};
