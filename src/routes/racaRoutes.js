import express from "express";
import RacaController from "../controllers/racaController.js";

const racaRouter = express.Router();

// Rotas de Raças
// GET /racas - Listar todas as Raças
racaRouter.get("/", RacaController.getAllRacas);

// GET /racas/:id - Obter uma Raça pelo ID
racaRouter.get("/:id", RacaController.getRacaById);

// POST /racas - Criar uma nova Raça
racaRouter.post("/", RacaController.createRaca);

// PUT /racas/:id - Atualizar uma Raça
racaRouter.put("/:id", RacaController.updateRaca);

// DELETE /racas/:id - Remover uma Raça
racaRouter.delete("/:id", RacaController.deleteRaca);

export default racaRouter;
