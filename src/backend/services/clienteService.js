// import { pool } from '../db.js'
// import validateCliente from '../schemas/clienteValidator.js';
// import Cliente from "../models/Cliente.js";

// const clienteValidator = validateCliente;
// async function findAll() {
//     //    const resultado = await Cliente.findAll();
//     //    console.log(resultado);
//     const result = await pool.query('SELECT * FROM Clientes;');
//     return resultado;
// }

// async function createCliente(clienteData) {
//     console.log("dentro de createCliente");
//     const { id, cuit, razonSocial, direccion, email, telefono, celular } = clienteData;
//     const result = await pool.query(
//         'INSERT INTO Clientes (id, cuit, razon_social, direccion, email, telefono, celular) VALUES ($1, $2, $3, $4, $5, $6, $7);',
//         [id, cuit, razonSocial, direccion, email, telefono, celular]);
//     return result;
// }

// async function findByPk(id) {
//     if (!Number.isInteger(id)) {
//         throw new Error('El id debe ser un número');
//     }

//     const { rows } = await pool.query(
//         'SELECT * FROM Clientes WHERE id = $1;',
//         [parseInt(id)]
//     );

//     //console.log(`Query result: ${JSON.stringify(rows)}`);

//     return rows.length > 0 ? rows[0] : {};

// }

// async function findByIdAndUpdate(id, clienteData) {
//     if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//     const { cuit, razonSocial, direccion, email, telefono, celular } = clienteData;
//     console.log({ cuit, razonSocial, direccion, email, telefono, celular });
//     const result = await pool.query(
//         'UPDATE Clientes SET cuit = $1, razon_social = $2, direccion = $3, email = $4, telefono = $5, celular = $6 WHERE id = $7',
//         [cuit, razonSocial, direccion, email, telefono, celular, id]);

//     console.log('Respuesta:', { rowCount: result.rowCount, message: 'Registro actualizado correctamente' });

//     console.log(result);
//     return result;
// }

// async function deleteClienteById(id) {
//     const result = await pool.query(
//         'DELETE FROM Cliente WHERE id = $1',
//         [id]);
//     console.log(result);
//     return result;
// }

// const clienteService = {
//     findAll,
//     findByPk,
//     findByIdAndUpdate,
//     createCliente,
//     deleteClienteById
// };

// export default clienteService;