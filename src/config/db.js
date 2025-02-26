import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;
const process = dotenv.config().parsed;

console.log(process);

const pool = new Pool({
    user: process.DB_USER,
    database: process.DB_DATABASE,
    host: process.DB_HOST,
    password: process.DB_PASSWORD,
    port: process.PORT,
    max: 3, // Número máximo de conexiones activas en el pool
    idleTimeoutMillis: 30000, // Tiempo máximo que una conexión puede estar inactiva antes de cerrarse
    connectionTimeoutMillis: 2000 // Tiempo máximo para intentar conectar antes de un timeout
});



export default pool;
