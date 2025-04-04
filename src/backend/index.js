import express from "express";
import clienteRoutes from "./routes/clienteRoutes.js";
// import conceptoRoutes from "./routes/conceptoRoutes.js";
// import tipoConceptoRoutes from "./routes/tipoConceptoRoutes.js"
// import remitoRoutes from "./routes/remitoRoutes.js"
import morgan from "morgan";
import { sequelize } from "./config/db.js";
import { PORT } from "./config.js";

import './models/Cliente.js';
import './models/Concepto.js';
import './models/ConceptoTipo.js';
import './models/Pago.js';
import './models/PagoItem.js';
import './models/Remito.js';
import './models/RemitoHistorico.js'
import './models/RemitoItem.js';
import './models/RemitoItemHistorico.js';

async function main() {
    try {
        await sequelize.sync({ alter: false });
        const app = express();
        app.use(morgan("dev"));

        // middlewares
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));

        app.use(clienteRoutes) //, conceptoRoutes, tipoConceptoRoutes, remitoRoutes);
        app.listen(PORT);
        // eslint-disable-next-line no-console
        console.log("Server on port", PORT);
    } catch (error) {
        console.log("Error conectandose al servidor: " + error);
    }
}

main();