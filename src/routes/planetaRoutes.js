import express from "express";
import planetasController from "../controllers/planetasController.js";

const planetasRouter = express.Router();

// Rotas de Planetas
// GET /api/planetas - Listar todos os planetas
planetasRouter.get("/", planetasController.getAllPlanetas);

// GET /api/planetas/:id - Obter um planeta pelo ID
planetasRouter.get("/:id", planetasController.getPlanetaById);

// POST /api/planetas - Criar um novo planeta
planetasRouter.post("/", planetasController.createPlaneta);

// PUT /api/planetas/:id - Atualizar um planeta
planetasRouter.put("/:id", planetasController.updatePlaneta);

// DELETE /api/planetas/:id - Remover um planeta
planetasRouter.delete("/:id", planetasController.deletePlaneta);

export default planetasRouter;
