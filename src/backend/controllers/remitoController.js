// import remitoService from "../services/remitoService.js";
// import remitoSchema from "../schemas/remitoValidator.js";
// import remitoItemService from "../services/remitoItemService.js";

// const validateRemito = remitoSchema;

// export const getRemitos = async (req, res) => {
//     try {
//         console.log("llamando a getRemitos");
//         const response = await remitoService.findAll();
//         console.log(response);
//         if (response.rowCount === 0) {
//             return res.status(200).json({ message: "No hay registros en la tabla Remitos" });
//         }
//         return res.json(response.rows);
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const getRemitoById = async (req, res) => {
//     try {
//         console.log("llamando a getRemitoById. Id: " + req.params.id);
//         const id = parseInt(req.params.id);
//         const response = await remitoService.findByPk(id);
//         if (response) {
//             res.json(response);
//         } else {
//             res.status(404).json({ error: "Remito no encontrado" });
//         }
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const createRemito = async (req, res) => {
//     try {
//         console.log("Llamando a createRemito");

//         // Validar datos con Zod
//         const remitoData = validateRemito.safeParse(req.body);

//         if (!remitoData.success) { //chequear como recuperar la descripcion del error de Zod
//             console.log("error en validacion");
//             console.log(remitoData.error.issues[0]);
//             throw new Error(remitoData.error.issues[0].message)
//         }

//         // Destructurar los datos validados
//         const { id, idCliente, importe, importe_saldado, esta_saldado } = req.body;

//         // Insertar en la base de datos
//         const response = await remitoService.createRemito({ id, idCliente, importe, importe_saldado, esta_saldado });
//         if (response.error) {
//             console.log(response.error);
//             throw new Error(response.error)
//         }

//         console.log(response);
//         res.status(201).json("El remito ha creado con éxito");
//     } catch (error) {
//         return res.status(500).json({ error: error.message, details: error });
//     }
// };

// export const updateRemito = async (req, res) => {
//     console.log("llamado a updateRemito");
//     // actualiza importe_saldado, esta_saldado
//     try {
//         const remitoData = validateRemito.safeParse(req.body);

//         if (!remitoData.success) {
//             console.log("error en validacion");
//             console.log(remitoData);
//             throw new Error.status(400).json({
//                 error: "Error en validacion",
//                 details: JSON.parse(remitoData.error)
//             })
//         }

//         const id = parseInt(req.params.id);
//         const { importe_saldado, esta_saldado } = req.body;
//         const response = await remitoService.findByIdAndUpdate(id, { importe_saldado, esta_saldado });

//         if (response) {
//             return res.status(200).json({ message: "Remito actualizado correctamente" });
//         } else {
//             return res.status(404).json({ error: "Remito no encontrado" });
//         }

//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const deleteRemito = async (req, res) => {
//     const id = parseInt(req.params.id);

//     try {
//         if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//         const response = await remitoService.deleteRemitoById(id);
//         if (response.rowCount === 0) {
//             return res.status(404).json({ message: "Remito no encontrado" });
//         }
//     } catch (error) {
//         return res.status(404).json({ message: "Se produjo un error", details: error.toString() });
//     }

//     return res.status(200).json({ message: "Remito eliminado correctamente" });
// };

// export default {
//     getRemitos, createRemito, getRemitoById, updateRemito, deleteRemito
// }
