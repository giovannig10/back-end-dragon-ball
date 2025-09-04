import prisma from "../../prisma/prisma.js";

class RacaModel {
  // Obter todas as raças
  async findAll() {
    const racas = await prisma.raca.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return racas;
  }

  // Obter uma raça pelo ID
  async findById(id) {
    const raca = await prisma.raca.findUnique({
      where: {
        id: Number(id),
      },
    });

    return raca;
  }

  // Criar uma nova raça
  async create(
    nome,
    descricao,
    caracteristicas,
    habilidadesEspeciais,
    nivelPoderMedio,
    planetaId
    
  ) {
    const novaRaca = await prisma.raca.create({
      data: {
         nome,
    descricao,
    caracteristicas,
    habilidadesEspeciais,
    nivelPoderMedio,
    planetaId: Number(planetaId)
      },
    });

    return novaRaca;
  }

  // Atualizar uma raça
  async update(
    id,
     nome,
    descricao,
    caracteristicas,
    habilidadesEspeciais,
    nivelPoderMedio,
    planetaId
  ) {
    const raca = await this.findById(id);

    if (!raca) {
      return null;
    }

    // Atualize a raça existente com os novos dados
    const data = {};
    if (nome !== undefined) {
      data.nome = nome;
    }
    if (descricao !== undefined) {
      data.descricao = descricao;
    }
    if (caracteristicas !== undefined) {
      data.caracteristicas = caracteristicas;
    }
    if (habilidadesEspeciais !== undefined) {
      data.habilidadesEspeciais = habilidadesEspeciais;
    }
    if (nivelPoderMedio !== undefined) {
      data.nivelPoderMedio = nivelPoderMedio;
    }
    if (planetaId !== undefined) {
      data.planetaId = Number(planetaId);
    }

    const racaAtualizada = await prisma.raca.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return racaAtualizada;
  }

  // Remover uma raça
  async delete(id) {
    const raca = await this.findById(id);

    if (!raca) {
      return null;
    }

    await prisma.raca.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new RacaModel();
