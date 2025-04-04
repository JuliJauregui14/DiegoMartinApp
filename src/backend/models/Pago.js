import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'
import { Remito } from './Remito.js';

export const Pago = sequelize.define('Pago', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_remito: { type: DataTypes.INTEGER, allowNull: false, references: { model: Remito, key: 'id' } },
    fecha: { type: DataTypes.DATE, allowNull: false },
    importe: { type: DataTypes.DOUBLE, allowNull: false }
}, { tableName: "pagos", timestamps: true, createdAt: true, updatedAt: true });

// export default Pago;