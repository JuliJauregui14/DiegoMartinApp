import { DataTypes } from 'sequelize';
import sql from '../config/db.js';

//Guardar modelos de datos en bd
//Similar al DAO

const Cliente = sql.define('Cliente', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    telefono: { type: DataTypes.INTEGER, allowNull: false, unique: false },
    direccion: { type: DataTypes.STRING, allowNull: false },
    cuit: { type: DataTypes.STRING, allowNull: true }
}, { tableName: "Clientes", timestamps: false });

async function findAll() {
    return await sql`SELECT * FROM Clientes;`;
}

async function create(ClienteData) {
    return await sql`INSERT INTO Clientes (id, nombre, email, telefono, direccion, cuit) VALUES (${ClienteData.id}, ${ClienteData.nombre}, ${ClienteData.email}, ${ClienteData.telefono}, ${ClienteData.direccion}, ${ClienteData.cuit});`;
}

async function findByPk(id) {
    return await sql`SELECT * FROM Clientes WHERE id = ${id};`;
}

async function findByIdAndUpdate(id, ClienteData) {
    return await sql`UPDATE Clientes set nombre = ${ClienteData.nombre}, email = ${ClienteData.email}, telefono = ${ClienteData.telefono}, direccion = ${ClienteData.direccion}, cuit = ${ClienteData.cuit} WHERE id = ${id};`;
}

export default {
    findAll, create, Cliente, findByPk, findByIdAndUpdate
}
