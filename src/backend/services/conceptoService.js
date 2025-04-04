// import { pool } from '../db.js'

// async function findAll() {
//     const result = await pool.query('SELECT * FROM Conceptos;');
//     return result;
// }

// async function createConcepto(conceptoData) {
//     console.log("dentro de createConcepto");
//     const { id, idTipo, descripcion, importe } = conceptoData;
//     console.log({ id, idTipo, descripcion, importe })
//     const result = await pool.query(
//         'INSERT INTO Conceptos (id, id_tipo, descripcion, importe) VALUES ($1, $2, $3, $4);',
//         [id, idTipo, descripcion, importe]);
//     return result;
// }

// async function findByPk(id) {
//     if (!Number.isInteger(id)) {
//         throw new Error('El id debe ser un número');
//     }

//     const { rows } = await pool.query(
//         'SELECT * FROM Conceptos WHERE id = $1;',
//         [parseInt(id)]
//     );

//     //console.log(`Query result: ${JSON.stringify(rows)}`);

//     return rows.length > 0 ? rows[0] : {};

// }

// async function findByIdAndUpdate(id, conceptoData) {
//     if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//     const { importe, descripcion } = conceptoData;
//     console.log({ cuit, razonSocial, direccion, email, telefono, celular });
//     const result = await pool.query(
//         'UPDATE Conceptos SET cuit = $1, razon_social = $2, direccion = $3, email = $4, telefono = $5, celular = $6 WHERE id = $7',
//         [cuit, razonSocial, direccion, email, telefono, celular, id]);

//     console.log('Respuesta:', { rowCount: result.rowCount, message: 'Registro actualizado correctamente' });

//     console.log(result);
//     return result;
// }

// async function deleteConceptoById(id) {
//     const result = await pool.query(
//         'DELETE FROM Conceptos WHERE id = $1',
//         [id]);
//     return result;
// }

// const conceptoService = {
//     findAll,
//     findByPk,
//     findByIdAndUpdate,
//     createConcepto,
//     deleteConceptoById
// };

// export default conceptoService;