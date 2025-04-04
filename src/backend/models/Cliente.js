import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'
// import sql from '../config/db.js';
//Guardar modelos de datos en bd
//Similar al DAO

export const Cliente = sequelize.define('Clientes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    razon_social: { type: DataTypes.STRING(100), allowNull: false },
    email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    telefono: { type: DataTypes.INTEGER, allowNull: false, unique: false },
    direccion: { type: DataTypes.STRING(100), allowNull: false },
    cuit: { type: DataTypes.STRING(13), allowNull: false },
    celular: { type: DataTypes.INTEGER, allowNull: true }
}, { tableName: "clientes", timestamps: true, createdAt: true, updatedAt: true });

// async function findAll() {
//     return await sql`SELECT * FROM Clientes;`;
// }

// async function create(ClienteData) {
//     return await sql`INSERT INTO Clientes (id, nombre, email, telefono, direccion, cuit) VALUES (${ClienteData.id}, ${ClienteData.nombre}, ${ClienteData.email}, ${ClienteData.telefono}, ${ClienteData.direccion}, ${ClienteData.cuit});`;
// }

// async function findByPk(id) {
//     return await sql`SELECT * FROM Clientes WHERE id = ${id};`;
// }

// async function findByIdAndUpdate(id, ClienteData) {
//     return await sql`UPDATE Clientes set nombre = ${ClienteData.nombre}, email = ${ClienteData.email}, telefono = ${ClienteData.telefono}, direccion = ${ClienteData.direccion}, cuit = ${ClienteData.cuit} WHERE id = ${id};`;
// }

// await Cliente.sync({ force: true });
// console.log('Se sincronizaron todos los modelos.');


