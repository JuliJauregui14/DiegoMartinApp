import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'

export const ConceptoTipo = sequelize.define('ConceptoTipo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    descripcion: { type: DataTypes.STRING(50), allowNull: false },
    importe_fijo: { type: DataTypes.BOOLEAN, allowNull: false }
}, { tableName: "conceptos_tipos", timestamps: true, createdAt: true, updatedAt: true });

// export default ConceptoTipo;