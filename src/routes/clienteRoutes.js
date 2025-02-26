import { Router } from 'express';
import {
    getClientes, getClienteById, createCliente, updateCliente, deleteCliente
} from '../controllers/clienteController.js';
import { validateSchema } from "../middlewares/validateSchema.js";
import clienteValidator from "../schemas/clienteValidator.js"

const router = Router();
const clienteSchema = clienteValidator;

//Routes invoca funciones del controller

//Get all clientes
router.get('/clientes', getClientes);

//Create nuevo cliente
router.post('/clientes', createCliente);

//Get cliente por id
router.get('/clientes/:id', getClienteById);

//Update cliente
router.put('/clientes/:id', validateSchema(clienteSchema), updateCliente);

//Delete cliente
router.delete('/:id', deleteCliente);

export default router;