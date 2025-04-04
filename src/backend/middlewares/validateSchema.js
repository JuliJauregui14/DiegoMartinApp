//Se encargan de validaciones y otras transformaciones previas a ejecutar la lógica del controlador,
//así este recibe los datos limpios y recién ahí llama a las funciones

import { ZodError } from "zod";

export const validateSchema = (schema) => (req, res, next) => {
    try {
        console.log(req.body);
        const parsedData = schema.parse(req.body);
        req.body = parsedData; // Sobreescribimos req.body con los datos validados
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({ error: "Error de validación", details: error.errors.map(e => e.message) });
        }
        next(error);
    }
};