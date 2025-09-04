import RacaModel from "../models/racaModel.js";

class RacaController {
  // GET /racas
  async getAllRacas(req, res) {
    const nivelPoderMedio = req.query.nivelPoderMedio;
    const planetaId = req.query.planetaId;
    const habilidadesEspeciais = req.query.habilidadesEspeciais || 1;
    const caracteristicas = req.query.caracteristicas || 10;
    const descricao = req.query.descricao;
    const name = req.query.name;

    try {
      const racas = await RacaModel.findAll();
      res.json(racas);
    } catch (error) {
      console.error("Erro ao buscar as raças:", error);
      res.status(500).json({ error: "Erro ao buscar as raças" });
    }
  }

  // GET /racas/:id
  async getRacaById(req, res) {
    try {
      const { id } = req.params;

      const raca = await RacaModel.findById(id);

      if (!raca) {
        return res.status(404).json({ error: "Raça não encontrada!" });
      }

      res.json(raca);
    } catch (error) {
      console.error("Erro ao buscar raça:", error);
      res.status(500).json({ error: "Erro ao buscar raça!" });
    }
  }

  // POST /racas
  async createRaca(req, res) {
    try {
      // Captura dos dados do corpo da requisição (frontend)
      const {
        nome,
        descricao,
        caracteristicas,
        habilidadesEspeciais,
        planetaId,
        nivelPoderMedio
      } = req.body;

      // Verifica se todos os campos da raça foram fornecidos
      if (
        !nome ||
        !descricao ||
        !caracteristicas ||
        !habilidadesEspeciais ||
        !planetaId ||
        !nivelPoderMedio
      ) {
        return res.status(400).json({
          error: "Todos os campos são obrigatórios",
        });
      }

      // Criar a nova Raça
      const newRaca = await RacaModel.create(
        nome,
        descricao,
        caracteristicas,
        habilidadesEspeciais,
        planetaId,
        nivelPoderMedio
      );

      if (!newRaca) {
        return res.status(400).json({ error: "Erro ao criar raça" });
      }

      res.status(201).json({
        message: "Raça criada com sucesso",
        newRaca,
      });
    } catch (error) {
      console.error("Erro ao criar Raça:", error);
      res.status(500).json({ error: "Erro ao criar Raça" });
    }
  }

  // PUT /racas/:id
  async updateRaca(req, res) {
    try {
      const { id } = req.params;
      const {
        nome,
        descricao,
        caracteristicas,
        habilidadesEspeciais,
        planetaId,
        nivelPoderMedio
      } = req.body;

      // Atualizar a Raça
      const updatedRaca = await RacaModel.update(
        id,
        nome,
        descricao,
        caracteristicas,
        habilidadesEspeciais,
        planetaId,
        nivelPoderMedio
      );

      if (!updatedRaca) {
        return res.status(404).json({ error: "Raça não encontrada" });
      }

      res.json(updatedRaca);
    } catch (error) {
      console.error("Erro ao atualizar Raça:", error);
      res.status(500).json({ error: "Erro ao atualizar Raça!" });
    }
  }

  // DELETE /racas/:id
  async deleteRaca(req, res) {
    try {
      const { id } = req.params;

      // Remover a Raça
      const result = await RacaModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Raça não encontrada!" });
      }

      res.status(200).json({
        message: "Raça removida com sucesso",
      });
    } catch (error) {
      console.error("Erro ao remover Raça:", error);
      res.status(500).json({ error: "Erro ao remover Raça!" });
    }
  }
}

export default new RacaController();
