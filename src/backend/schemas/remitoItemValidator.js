import { z } from 'zod';

const remitoItemSchema = z.object({
    id_remito: z.number()
        .int()
        .positive({ message: 'El id_remito debe ser un número entero positivo.' }),
    id_concepto: z.number()
        .int()
        .positive({ message: 'El id_concepto debe ser un número entero positivo.' }),
    importe: z.number()
        .positive({ message: 'El importe debe ser un número positivo.' }),
    importe_saldado: z.number()
        .nonnegative({ message: 'El importe_saldado no puede ser negativo.' }),
    esta_saldado: z.boolean({ message: 'El campo esta_saldado debe ser un valor booleano.' })
});

function validateRemitoItem(data) {
    try {
        return remitoItemSchema.parse(data);
    } catch (error) {
        throw new Error(error.errors.map(err => err.message).join(', '));
    }
}

export default validateRemitoItem;