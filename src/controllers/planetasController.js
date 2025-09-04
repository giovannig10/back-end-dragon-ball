import PlanetaModel from "../models/planetasModel.js";

class PlanetaController {
  // GET /api/planetas
  async getAllPlanetas(req, res) {
    try {
      const planetas = await PlanetaModel.findAll();
      res.json(planetas);
    } catch (error) {
      console.error("Erro ao buscar planetas:", error);
      res.status(500).json({ error: "Erro ao buscar planetas" });
    }
  }

  // GET /api/planetas/:id
  async getPlanetaById(req, res) {
    try {
      const { id } = req.params;

      const planeta = await PlanetaModel.findById(id);

      if (!planeta) {
        return res.status(404).json({ error: "Planeta não encontrado" });
      }

      res.json(planeta);
    } catch (error) {
      console.error("Erro ao buscar planeta:", error);
      res.status(500).json({ error: "Erro ao buscar planeta" });
    }
  }

  // POST /api/planetas
  async createPlaneta(req, res) {
    try {
      // Validação básica
      const {
         nome,
    descricao,
    imageUrl,
    nivelPoder
      } = req.body;

      if (
        !nome ||
        !descricao ||
        !imageUrl ||
        !nivelPoder
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      // Criar o novo planeta
      const newPlaneta = await PlanetaModel.create(
        nome,
        descricao,
        imageUrl,
        nivelPoder
      );

      if (!newPlaneta) {
        return res.status(400).json({ error: "Erro ao criar planeta" });
      }

      res.status(201).json(newPlaneta);
    } catch (error) {
      console.error("Erro ao criar planeta:", error);
      res.status(500).json({ error: "Erro ao criar planeta" });
    }
  }

  // PUT /api/planetas/:id
  async updatePlaneta(req, res) {
    try {
      const { id } = req.params;
      const {
        nome,
        descricao,
        imageUrl,
        nivelPoder,
      } = req.body;

      // Atualizar o planeta
      const updatedPlaneta = await PlanetaModel.update(
        id,
        nome,
        descricao,
        imageUrl,
        nivelPoder
      );

      if (!updatedPlaneta) {
        return res.status(404).json({ error: "Planeta não encontrado" });
      }

      res.json(updatedPlaneta);
    } catch (error) {
      console.error("Erro ao atualizar planeta:", error);
      res.status(500).json({ error: "Erro ao atualizar planeta" });
    }
  }

  // DELETE /api/planetas/:id
  async deletePlaneta(req, res) {
    try {
      const { id } = req.params;

      // Remover o planeta
      const result = await PlanetaModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Planeta não encontrado" });
      }

      res.status(204).end(); // Resposta sem conteúdo
    } catch (error) {
      console.error("Erro ao remover planeta:", error);
      res.status(500).json({ error: "Erro ao remover planeta" });
    }
  }
}

export default new PlanetaController();