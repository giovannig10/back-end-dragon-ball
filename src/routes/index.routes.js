import express from "express";

// Importar todas as rotas
import planetaRouter from "./planetaRoutes.js";
import personagemRouter from "./personagemRoutes.js";
import racaRouter from "./racaRoutes.js";

const router = express.Router();

// Rotas públicas
router.use("/raca", racaRouter);

router.use("/planetas", planetaRouter);
router.use("/personagens", personagemRouter);

export default router;
