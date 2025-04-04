// import tipoConceptoService from "../services/tipoConceptoService.js";
// import tipoConceptoSchema from "../schemas/tipoConceptoValidator.js";

// const validateTipoConcepto = tipoConceptoSchema;

// export const getTiposConceptos = async (req, res) => {
//     try {
//         console.log("llamando a getTiposConceptos");
//         const response = await tipoConceptoService.findAll();
//         console.log(response);
//         if (response.rowCount === 0) {
//             return res.status(200).json({ message: "No hay registros en la tabla conceptos_tipos" });
//         }
//         return res.json(response.rows);
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const getTiposConceptoById = async (req, res) => {
//     try {
//         console.log("llamando a getTiposConceptoById. Id: " + req.params.id);
//         const id = parseInt(req.params.id);
//         const response = await tipoConceptoService.findByPk(id);
//         if (response) {
//             res.json(response);
//         } else {
//             res.status(404).json({ error: "Tipo concepto no encontrado" });
//         }
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const createTipoConcepto = async (req, res) => {
//     try {
//         console.log("Llamando a createTipoConcepto");

//         // Validar datos con Zod
//         const tipoConceptoData = validateTipoConcepto.safeParse(req.body);
//         console.log(tipoConceptoData);

//         if (!tipoConceptoData.success) {
//             console.log("error en validacion");
//             throw new Error.status(400).json({
//                 error: "Error en validacion",
//                 details: JSON.parse(tipoConceptoData.error)
//             })
//         }

//         // Destructurar los datos validados
//         const { id, importeFijo, descripcion } = req.body;

//         // Insertar en la base de datos
//         const response = await tipoConceptoService.createTipoConcepto({ id, importeFijo, descripcion });
//         console.log(response);
//         if (response.rowCount === 0) {
//             throw new Error("Se produjo un error y no se pudo crear el registro");
//         } else {
//             return res.status(201).json({ message: "Tipo Concepto creado correctamente " });
//         }
//     } catch (error) {
//         if (error.status === 400) {
//             //Error de validación
//             return res.status(400).json({ error: error.message, details: error.details });
//         }
//         console.log("error abajo: ")
//         console.log(error);
//         return res.status(500).json({ error: "Error interno del servidor", details: error.detail });
//     }
// };

// export const updateTipoConcepto = async (req, res) => {
//     console.log("llamado a updateTipoConcepto");
//     // actualiza importeFijo y descripcion
//     try {
//         const tipoConceptoData = validateTipoConcepto.safeParse(req.body);
//         if (!tipoConceptoData.success) {
//             console.log("error en validacion");
//             throw new Error.status(400).json({
//                 error: "Error en validacion",
//                 details: JSON.parse(tipoConceptoData.error)
//             })
//         }

//         const id = parseInt(req.params.id);
//         const { importeFijo, descripcion } = req.body;
//         const response = await tipoConceptoService.findByIdAndUpdate(id, { importeFijo, descripcion });

//         if (response) {
//             return res.status(200).json({ message: "Tipo concepto actualizado correctamente" });
//         } else {
//             return res.status(404).json({ error: "Tipo concepto no encontrado" });
//         }

//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// };

// export const deleteTipoConcepto = async (req, res) => {
//     const id = parseInt(req.params.id);

//     try {
//         if (!Number.isInteger(id)) throw new Error('El ID debe ser un número entero.');

//         const response = await tipoConceptoService.deleteTipoConceptoById(id);
//         if (response.rowCount === 0) {
//             return res.status(404).json({ message: "Tipo concepto no encontrado" });
//         } else {
//             console.log("tipo concepto eliminado, va a retornar res");
//             return res.status(200).json({ message: "Tipo concepto eliminado correctamente" });
//         }
//     } catch (error) {
//         return res.status(404).json({ message: "Se produjo un error", details: error.toString() });
//     }
// };

// export default {
//     getTiposConceptos, getTiposConceptoById, createTipoConcepto, updateTipoConcepto, deleteTipoConcepto
// }
