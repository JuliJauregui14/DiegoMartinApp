import { pool } from "../db.js";
import clienteService from "../services/clienteService.js";

export const getClientes = async (req, res) => {
  try {
    console.log("llamando a getClientes");
    const response = await clienteService.findAll();
    res.json(response.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getClienteById = async (req, res) => {
  try {
    console.log("llamando a getClienteById. Id: " + req.params.id);
    const id = parseInt(req.params.id);
    const response = await clienteService.findByPk(id);
    if (response) {
      res.json(response);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const createCliente = async (req, res) => {
  try {
    console.log("Llamando a createCliente");

    // Validar datos con Zod
    const clienteData = validateCliente(req.body);

    // Destructurar los datos validados
    const { nombre, email, telefono, direfeccion, cuit } = clienteData;

    // Insertar en la base de datos
    clienteService.createCliente({ nombre, email, telefono, direfeccion, cuit });

    res.status(201).json(rows[0]);
  } catch (error) {
    if (error.status === 400) {
      // Error de validación
      return res.status(400).json({ error: error.message, details: error.details });
    }

    console.error("Error en createCliente:", error);

    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateCliente = async (req, res) => {
  console.log("llamado a updateCliente");
  try {

    const id = parseInt(req.params.id);
    const { nombre, email, telefono, direccion, cuit } = req.body;


    const response = await clienteService.findByIdAndUpdate(id, { nombre, email, telefono, direccion, cuit });

    if (response) {
      return res.status(200).json({ message: "Cliente actualizado correctamente" });
    } else {
      return res.status(404).json({ error: "Cliente no encontrado" });
    }

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteCliente = async (req, res) => {
  const id = parseInt(req.params.id);
  const { rowCount } = await pool.query("DELETE FROM users where id = $1", [
    id,
  ]);

  if (rowCount === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  return res.sendStatus(204);
};

export default {
  getClientes, getClienteById, createCliente, updateCliente, deleteCliente
}
