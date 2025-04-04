import { z } from "zod";

const remitosSchema = z.object({
    id: z.number()
        .int()
        .positive()
        .min(1, { message: "El id debe ser un número positivo mayor a 0" }),
    id_cliente: z.number()
        .int()
        .positive()
        .min(1, { message: "El id_cliente debe ser un número positivo mayor a 0" }),
    importe: z.number()
        .positive({ message: "El importe debe ser un número positivo" }),
    importe_saldado: z.number()
        .nonnegative({ message: "El importe saldado no puede ser negativo" }),
    esta_saldado: z.boolean()
});

export default remitosSchema;
