// import { Router } from 'express';
// import {
//     getTiposConceptos, getTiposConceptoById, createTipoConcepto, updateTipoConcepto, deleteTipoConcepto
// } from '../controllers/tipoConceptoController.js';
// import { validateSchema } from "../middlewares/validateSchema.js";
// import tipoConceptoValidator from "../schemas/tipoConceptoValidator.js"

// const router = Router();
// const tipoConceptoSchema = tipoConceptoValidator;

// //Get all conceptos
// router.get('/tiposConceptos', getTiposConceptos);

// //Create nuevo concepto
// router.post('/tiposConceptos', createTipoConcepto);

// //Get concepto por id
// router.get('/tiposConceptos/:id', getTiposConceptoById);

// //Update concepto
// router.put('/tiposConceptos/:id', validateSchema(tipoConceptoSchema), updateTipoConcepto);

// //Delete concepto
// router.delete('/tiposConceptos/:id', deleteTipoConcepto);

// export default router;