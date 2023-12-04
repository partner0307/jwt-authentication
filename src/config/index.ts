import * as dotenv from 'dotenv';
dotenv.config();

const config = {
    jwt: {
        secret: process.env.SECRET_KEY,
        audience: process.env.AUDIENCE,
        issuer: process.env.ISSUER
    },
    port: process.env.PORT || 8000,
    prefix: process.env.API_PREFIX || 'api'
}


export default config;