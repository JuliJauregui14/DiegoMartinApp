import { z } from "zod";

const clienteSchema = z.object({
    razon_social: z.string()
        .min(1, { message: "La razón social es obligatoria" })
        .max(100, { message: "La razón social no puede tener más de 100 caracteres" }),

    email: z.string()
        .email({ message: "El email debe ser válido" })
        .max(50, { message: "El email no puede tener más de 50 caracteres" }),

    telefono: z.number()
        .int()
        .positive()
        .min(1000000, { message: "El teléfono debe ser un número válido" }),

    direccion: z.string()
        .min(1, { message: "La dirección es obligatoria" })
        .max(100, { message: "La dirección no puede tener más de 100 caracteres" }),

    cuit: z.string()
        .min(11, { message: "El cuit no puede tener menos de 11 caracteres" })
        .max(13, { message: "El cuit no puede tener mas de 13 caracteres" }),

    celular: z.number()
        .int()
        .positive()
        .min(1000000, { message: "El celular debe ser un número válido" })
        .optional()
});

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