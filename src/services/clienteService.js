import { pool } from '../db.js'
import validateCliente from '../schemas/clienteValidator.js';

const clienteValidator = validateCliente;
async function findAll() {
    const result = await pool.query('SELECT * FROM Clientes;');
    return result;
}

async function createCliente(clienteData) {
    clienteValidator(clienteData);

    const { id, nombre, email, telefono, direccion, cuit } = clienteData;
    const { result } = await pool.query(
        'INSERT INTO Clientes (id, nombre, email, telefono, direccion, cuit) VALUES ($1, $2, $3, $4, $5, $6);',
        [id, nombre, email, telefono, direccion, cuit]);
    return result[0];
}

async function findByPk(id) {
    if (!Number.isInteger(id)) {
        throw new Error('El id debe ser un número');
    }

    const { rows } = await pool.query(
        'SELECT * FROM Clientes WHERE id = $1;',
        [parseInt(id)]
    );

    //console.log(`Query result: ${JSON.stringify(rows)}`);

    return rows.length > 0 ? rows[0] : {};

}

async function findByIdAndUpdate(id, clienteData) {
    if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

    const { nombre, email, telefono, direccion, cuit } = clienteData;
    console.log(nombre + email + telefono + direccion + cuit + "  " + id);

    const result = await pool.query(
        'UPDATE Clientes set nombre = $1, email = $2, telefono = $3, direccion = $4, cuit = $5 WHERE id = $6;',
        [nombre, email, telefono, direccion, cuit, id]);

    console.log('Respuesta:', { rowCount: result.rowCount, message: 'Registro actualizado correctamente' });

    console.log(result);
    return result;

}

const clienteService = {
    findAll,
    findByPk,
    findByIdAndUpdate
};

export default clienteService;