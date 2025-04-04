// import { pool } from '../db.js'
// import validateRemito from '../schemas/remitoValidator.js';
// //import { Remito } from "../models/Remito.js";

// const remitoValidator = validateRemito;
// async function findAll() {
//     //   const resultado = await Remito.findAll();
//     //    console.log(resultado);
//     const result = await pool.query('SELECT * FROM Remitos;');
//     return result;
// }

// async function createRemito(remitoData) {
//     console.log("dentro de createRemito");
//     const { id, idCliente, importe, importe_saldado, esta_saldado } = remitoData;

//     const result = await pool.query(
//         'INSERT INTO remitos VALUES ($1, $2, current_timestamp, $3, $4, $5)',
//         [id, idCliente, importe, importe_saldado, esta_saldado]);
//     return result;
// }

// async function findByPk(id) {
//     if (!Number.isInteger(id)) {
//         throw new Error('El id debe ser un número');
//     }

//     const { rows } = await pool.query(
//         'SELECT * FROM Remitos WHERE id = $1;',
//         [parseInt(id)]
//     );

//     //console.log(`Query result: ${JSON.stringify(rows)}`);
//     return rows.length > 0 ? rows[0] : {};
// }

// async function findByIdAndUpdate(id, remitoData) {
//     if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//     const { importe_saldado, esta_saldado } = remitoData;
//     console.log({ importe_saldado, esta_saldado });
//     const result = await pool.query(
//         'UPDATE Remitos SET importe_saldado = $1, esta_saldado = $2 WHERE id = $3',
//         [importe_saldado, esta_saldado, id]);

//     console.log('Respuesta:', { rowCount: result.rowCount, message: 'Registro actualizado correctamente' });
//     console.log(result);
//     return result;
// }

// async function deleteRemitoById(id) {
//     const registroViejo = await findByPk(id);
//     console.log("registro a eliminar: " + registroViejo);
//     const result = await pool.query(
//         'DELETE FROM Remitos WHERE id = $1',
//         [id]);
//     console.log(result);
//     console.log("previo a createRegmitoHistorico");
//     createRemitoHistorico(registroViejo);
//     return result;
// }

// async function createRemitoHistorico(remitoData) {
//     console.log("dentro de createRemitoHistorico");
//     const { id, idCliente, fecha_creacion, importe, importe_saldado, esta_saldado } = remitoData;
//     const result = await pool.query(
//         'INSERT INTO remitos_historicos VALUES ($1, $2, $3, $4, $5, $6, current_timestamp)',
//         [id, idCliente, fecha_creacion, importe, importe_saldado, esta_saldado]);
//     return result;
// }

// const remitoService = {
//     findAll,
//     findByPk,
//     findByIdAndUpdate,
//     createRemito,
//     deleteRemitoById
// };

// export default remitoService;