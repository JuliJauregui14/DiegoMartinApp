// import { pool } from '../db.js';
// import validateRemitoItem from '../schemas/remitoItemValidator.js';

// async function findAll() {
//     const result = await pool.query('SELECT * FROM remitos_items;');
//     return result.rows;
// }

// async function createRemitoItem(remitoItemData) {
//     console.log("Dentro de createRemitoItem");
//     const { id_remito, id_concepto, importe, importe_saldado, esta_saldado } = remitoItemData;

//     const result = await pool.query(
//         'INSERT INTO remitos_items (id_remito, id_concepto, importe, importe_saldado, esta_saldado) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
//         [id_remito, id_concepto, importe, importe_saldado, esta_saldado]
//     );
//     return result.rows[0];
// }

// async function findByPk(id) {
//     if (!Number.isInteger(id)) {
//         throw new Error('El ID debe ser un número entero.');
//     }

//     const { rows } = await pool.query(
//         'SELECT * FROM remitos_items WHERE id = $1;',
//         [id]
//     );
//     return rows.length > 0 ? rows[0] : null;
// }

// async function findByIdAndUpdate(id, remitoItemData) {
//     if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//     const { importe_saldado, esta_saldado } = remitoItemData;
//     const result = await pool.query(
//         'UPDATE remitos_items SET importe_saldado = $1, esta_saldado = $2 WHERE id = $3;',
//         [importe_saldado, esta_saldado, id]
//     );

//     return result.rows[0];
// }

// async function deleteRemitoItemById(id) {
//     const registroViejo = await findByPk(id);
//     if (!registroViejo) throw new Error('El ítem no existe.');

//     const result = await pool.query(
//         'DELETE FROM remitos_items WHERE id = $1;',
//         [id]
//     );

//     await createRemitoItemHistorico(registroViejo);
//     return result.rows[0];
// }

// async function createRemitoItemHistorico(remitoItemData) {
//     console.log("Dentro de createRemitoItemHistorico");
//     const { id, id_remito, id_concepto, importe, importe_saldado, esta_saldado } = remitoItemData;
//     const result = await pool.query(
//         'INSERT INTO remitos_items_historicos (id, id_remito, id_concepto, importe, importe_saldado, esta_saldado, fecha_creacion) VALUES ($1, $2, $3, $4, $5, $6, current_timestamp) RETURNING *;',
//         [id, id_remito, id_concepto, importe, importe_saldado, esta_saldado]
//     );
//     return result.rows[0];
// }

// const remitoItemService = {
//     findAll,
//     findByPk,
//     findByIdAndUpdate,
//     createRemitoItem,
//     deleteRemitoItemById
// };

// export default remitoItemService;
