import Sequelize from 'sequelize';
import dotenv from 'dotenv';

const process = dotenv.config().parsed;
console.log(process);

Sequelize.useC

export const sequelize = new Sequelize(process.DB_DATABASE, process.DB_USER, process.DB_PASSWORD, {
    host: process.DB_HOST,
    port: process.DB_PORT,
    dialect: 'postgres'
});

// export default sequelize;

// await sequelize.authenticate().then(() => {
//     console.log('Conexión exitosa a la base de datos');
// }).catch((error) => {
//     console.error('Error al conectar a la base de datos:', error);
// });

// const cliente1 = new Cliente({ id: 1 })
// console.log("clientes: " + sequelize.model.clientes);


// const pool = new Pool({
//     user: process.DB_USER,
//     database: process.DB_DATABASE,
//     host: process.DB_HOST,
//     password: process.DB_PASSWORD,
//     port: process.PORT,
//     max: 3, // Número máximo de conexiones activas en el pool
//     idleTimeoutMillis: 30000, // Tiempo máximo que una conexión puede estar inactiva antes de cerrarse
//     connectionTimeoutMillis: 2000 // Tiempo máximo para intentar conectar antes de un timeout
// });



// export default pool;
