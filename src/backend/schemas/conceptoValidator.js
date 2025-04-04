import { z } from "zod";

const conceptosSchema = z.object({
    id: z.number()
        .int()
        .positive()
        .min(1, { message: "El id debe ser un número positivo mayor a 0" }),
    idTipo: z.number()
        .int()
        .positive()
        .min(1, { message: "El id_tipo debe ser un número positivo mayor a 0" }),
    descripcion: z.string()
        .min(1, { message: "La descripción es obligatoria" })
        .max(50, { message: "La descripción no puede tener más de 50 caracteres" }),
    importe: z.number()
        .min(0, { message: "El importe debe ser cero o un número positivo" })
});

export default conceptosSchema;
