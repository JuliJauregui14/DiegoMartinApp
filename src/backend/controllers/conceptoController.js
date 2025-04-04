// import conceptoService from "../services/conceptoService.js";
// import conceptoSchema from "../schemas/conceptoValidator.js";

// const validateConcepto = conceptoSchema;

// export const getConceptos = async (req, res) => {
//     try {
//         console.log("llamando a getConceptos");
//         const response = await conceptoService.findAll();
//         console.log(response);
//         if (response.rowCount === 0) {
//             return res.status(200).json({ message: "No hay registros en la tabla Conceptos" });
//         }
//         return res.json(response.rows);
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const getConceptoById = async (req, res) => {
//     try {
//         console.log("llamando a getConceptoById. Id: " + req.params.id);
//         const id = parseInt(req.params.id);
//         const response = await conceptoService.findByPk(id);
//         if (response) {
//             res.json(response);
//         } else {
//             res.status(404).json({ error: "Concepto no encontrado" });
//         }
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const createConcepto = async (req, res) => {
//     try {
//         console.log("Llamando a createConcepto");

//         // Validar datos con Zod
//         const conceptoData = validateConcepto.safeParse(req.body);

//         if (!conceptoData.success) { //chequear como recuperar la descripcion del error de Zod
//             console.log("error en validacion");
//             console.log(conceptoData.error);
//             throw new Error.status(400).json({
//                 error: "Error en validacion",
//                 details: JSON.parse(conceptoData.error)
//             })
//         }

//         // Destructurar los datos validados
//         // const { id, idTipo, importeFijo, descripcion } = req.body;

//         // Insertar en la base de datos
//         const response = await conceptoService.createConcepto(req.body);

//         res.status(201).json("El concepto se creó correctamente");
//     } catch (error) {
//         if (error.status === 400) {
//             //Error de validación
//             return res.status(400).json({ error: error.message, details: error.details });
//         }
//         console.log("catch controller error abajo: ")
//         return res.status(500).json({ error: error, details: error.details });
//     }
// };

// export const updateConcepto = async (req, res) => {
//     console.log("llamado a updateConcepto");
//     // actualiza descripcion e importe
//     try {
//         const conceptoData = validateConcepto.safeParse(req.body);
//         const id = parseInt(req.params.id);
//         const { descripcion, importe } = req.body;
//         const response = await conceptoService.findByIdAndUpdate(id, { descripcion, importe });

//         if (response) {
//             return res.status(200).json({ message: "Concepto actualizado correctamente" });
//         } else {
//             return res.status(404).json({ error: "Concepto no encontrado" });
//         }

//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const deleteConcepto = async (req, res) => {
//     const id = parseInt(req.params.id);

//     try {
//         if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//         const response = await conceptoService.deleteConceptoById(id);
//         if (response.rowCount === 0) {
//             return res.status(404).json({ message: "Concepto no encontrado" });
//         }
//     } catch (error) {
//         return res.status(404).json({ message: "Se produjo un error", details: error.toString() });
//     }

//     return res.status(200).json({ message: "Concepto eliminado correctamente" });
// };

// export default {
//     getConceptos, createConcepto, getConceptoById, updateConcepto, deleteConcepto
// }
