// import { pool } from "../db.js";
// import clienteService from "../services/clienteService.js";
import clienteSchema from "../schemas/clienteValidator.js";
import { Cliente } from "../models/Cliente.js";

const validateCliente = clienteSchema;

export async function getClientes(req, res) {
  try {
    console.log("llamando a getClientes");
    const response = await Cliente.findAll({
      attributes: ["id", "razon_social", "email", "telefono", "direccion", "cuit", "celular", "createdAt", "updatedAt"],
    });
    console.log("respuesta: " + response);
    res.json(response)

    // const response = await clienteService.findAll();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export async function getClienteById(req, res) {
  try {
    console.log("llamando a getClienteById. Id: " + req.params.id);
    const id = parseInt(req.params.id);
    const response = await Cliente.findByPk(id);
    if (response) {
      res.json(response);
    } else {
      res.status(404).json({ error: "Cliente no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export async function createCliente(req, res) {
  try {
    console.log("dentro de createCliente");
    //Le saque el id a la validacion para que no explote el validate
    const clienteData = validateCliente.safeParse(req.body);
    if (!clienteData.success) {
      console.log("error en validacion");
      console.log(clienteData);
      throw new Error(clienteData.error);
    }
    const { razon_social, email, telefono, direccion, cuit, celular } = req.body;
    let response = await Cliente.create({
      razon_social, email, telefono, direccion, cuit, celular
    });

    return res.json("Cliente creado con éxito!");
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error });
  }
}

export async function updateCliente(req, res) {
  try {
    const id = req.params.id;
    const cliente = await Cliente.findByPk(id);
    console.log(cliente)
    if (!cliente) return res.status(404).json({error: "Cliente no encontrado"});

    const clienteData = validateCliente.partial().safeParse(req.body);
    if (!clienteData.success) return res.status(404).json({error: clienteData.error});
    const response = await cliente.update(req.body);
    return res.status(201).json("Cliente actualizado correctamente");
    
  } catch (error) {
    res.status(400).json({error: error.errors ?? "Error al actualizar cliente"});
  }  
}

export async function deleteCliente(req, res) {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
    await cliente.destroy();
    return res.json({ mensaje: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error ?? "Error al eliminar el cliente" });
  }
}
