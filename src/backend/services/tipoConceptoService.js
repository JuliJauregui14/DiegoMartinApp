// import { pool } from '../db.js'
// async function findAll() {
//     const result = await pool.query('SELECT * FROM conceptos_tipos;');
//     return result;
// }

// async function findByPk(id) {
//     if (!Number.isInteger(id)) {
//         throw new Error('El id debe ser un número');
//     }

//     const { rows } = await pool.query(
//         'SELECT * FROM conceptos_tipos WHERE id = $1;',
//         [parseInt(id)]
//     );

//     return rows.length > 0 ? rows[0] : {};

// }

// async function findByIdAndUpdate(id, clienteData) {
//     if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//     const { importeFijo, descripcion } = clienteData;
//     console.log({ importeFijo, descripcion });
//     const result = await pool.query(
//         'UPDATE conceptos_tipos SET importe_fijo = $1, descripcion = $2 WHERE id = $3',
//         [importeFijo, descripcion, id]);

//     console.log('Respuesta:', { rowCount: result.rowCount, message: 'Registro actualizado correctamente' });

//     console.log(result);
//     return result;
// }

// async function createTipoConcepto(clienteData) {
//     console.log("dentro de createTipoConcepto");
//     const { id, importeFijo, descripcion } = clienteData;
//     const result = await pool.query(
//         'INSERT INTO conceptos_tipos (id, importe_fijo, descripcion) VALUES ($1, $2, $3);',
//         [id, importeFijo, descripcion]);
//     return result;
// }

// async function deleteTipoConceptoById(id) {
//     const result = await pool.query(
//         'DELETE FROM conceptos_tipos WHERE id = $1',
//         [id]);
//     console.log(result);
//     return result;
// }

// const tipoConceptoService = {
//     findAll,
//     findByPk,
//     findByIdAndUpdate,
//     createTipoConcepto,
//     deleteTipoConceptoById
// };

// export default tipoConceptoService;