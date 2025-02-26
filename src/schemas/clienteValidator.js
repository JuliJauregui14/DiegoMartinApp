import { z } from "zod";

const clienteSchema = z.object({
    id: z.number()
        .int()
        .positive()
        .min(1, { message: "El i debe ser un número positivo mayor a 0" }),

    nombre: z.string()
        .min(1, { message: "El nombre es obligatorio" })
        .max(80, { message: "El nombre no puede tener más de 80 caracteres" }),

    email: z.string()
        .email()
        .min(1, { message: "El email es obligatorio" })
        .max(60, { message: "El email no puede tener más de 60 caracteres" }),

    telefono: z.number()
        .gte(1100000000, { message: "El teléfono debe ser un número válido para Argentina" })
        .lte(1599999999, { message: "El teléfono debe ser un número válido para Argentina" }),

    direccion: z.string()
        .min(1, { message: "La direccion es obligatoria" })
        .max(80, { message: "La direccion no puede tener más de 80 caracteres" }),

    cuit: z.string()
        .length(11, { message: "El CUIT debe tener exactamente 11 caracteres y no debe incluid guiones medios" })
        .optional(),
})

export default clienteSchema;
/*
export default function validateCliente(clienteData) {
    try {
        return clienteSchema.safeParse(clienteData);
    } catch (error) {
        throw {
            status: 400,
            message: "Error de validación",
            details: error.errors.map(error => error.message),
        }
    }
}
*/