import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'
// import sql from '../config/db.js';
//Guardar modelos de datos en bd
//Similar al DAO

export const Remito = sequelize.define('Remito', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_cliente: { type: DataTypes.INTEGER, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    importe: { type: DataTypes.DOUBLE, allowNull: false },
    importe_saldado: { type: DataTypes.DOUBLE, allowNull: false },
    esta_saldado: { type: DataTypes.BOOLEAN, allowNull: false }
}, { tableName: "remitos", timestamps: true, createdAt: true, updatedAt: true });


// export default Remito
