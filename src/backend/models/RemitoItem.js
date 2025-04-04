import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'
import { Remito } from './Remito.js';
import { Concepto } from './Concepto.js';

export const RemitoItem = sequelize.define('RemitoItem', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_remito: { type: DataTypes.INTEGER, allowNull: false, references: { model: Remito, key: 'id' } },
    id_concepto: { type: DataTypes.INTEGER, allowNull: false, references: { model: Concepto, key: 'id' } },
    importe: { type: DataTypes.DOUBLE, allowNull: false },
    importe_saldado: { type: DataTypes.DOUBLE, allowNull: false },
    esta_saldado: { type: DataTypes.BOOLEAN, allowNull: false }
}, { tableName: "remitos_items", timestamps: true, createdAt: true, updatedAt: true });

// export default RemitoItem;