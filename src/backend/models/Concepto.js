import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'
import { ConceptoTipo } from './ConceptoTipo.js';
// import sql from '../config/db.js';
//Guardar modelos de datos en bd
//Similar al DAO

export const Concepto = sequelize.define('Concepto', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_tipo: { type: DataTypes.INTEGER, allowNull: false, references: { model: ConceptoTipo, key: 'id' } },
    descripcion: { type: DataTypes.STRING(50), allowNull: false },
    importe: { type: DataTypes.DOUBLE, allowNull: false }
}, { tableName: "conceptos", timestamps: true, createdAt: true, updatedAt: true });


// export default Concepto