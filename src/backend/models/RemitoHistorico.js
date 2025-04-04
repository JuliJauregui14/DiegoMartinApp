import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'

export const RemitoHistorico = sequelize.define('RemitoHistorico', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_cliente: { type: DataTypes.INTEGER, allowNull: false },
    fecha_creacion: { type: DataTypes.DATE, allowNull: false },
    importe: { type: DataTypes.DOUBLE, allowNull: false },
    importe_saldado: { type: DataTypes.DOUBLE, allowNull: false },
    esta_saldado: { type: DataTypes.BOOLEAN, allowNull: false }
}, { tableName: "remitos_historicos", timestamps: true, createdAt: true, updatedAt: true });

// export default RemitoHistorico