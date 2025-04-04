import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js'
import { Pago } from './Pago.js';
import { RemitoItem } from './RemitoItem.js';

export const PagoItem = sequelize.define('PagoItem', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_pago: { type: DataTypes.INTEGER, allowNull: false, references: { model: Pago, key: 'id' } },
    id_item_remito: { type: DataTypes.INTEGER, allowNull: false, references: { model: RemitoItem, key: 'id' } },
    importe: { type: DataTypes.DOUBLE, allowNull: false }
}, { tableName: "pagos_items", timestamps: false });

// export default PagoItem;