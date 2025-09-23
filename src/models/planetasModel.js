import prisma from "../../prisma/prisma.js";

class PlanetaModel {
  // Obter todos os planetas
  async findAll() {
    const planetas = await prisma.planeta.findMany({
      
    });

    return planetas;
  }

  // Obter um planeta pelo ID
  async findById(id) {
    const planeta = await prisma.planeta.findUnique({
      where: {
        id: Number(id),
      },
    });

    return planeta;
  }

  // Criar um novo planeta
  async create(
    planetaId,
    nome,
    descricao,
    imageUrl,
    nivelPoder
  ) {
    const newPlaneta = await prisma.planeta.create({
      data: {
        planetaId,
        nome,
        descricao,
        imageUrl,
        nivelPoder
      },
    });

    return newPlaneta;
  }

  // Atualizar um planeta
  async update(
    planetaId,
     nome,
    descricao,
    imageUrl,
    nivelPoder
  ) {
    const planeta = await this.findById(id);

    if (!planeta) {
      return null;
    }

    // Atualize o planeta existente com os novos dados
    const data = {};
    if (nome !== undefined) {
      data.nome = nome;
    }
    if (descricao !== undefined) {
      data.descricao = descricao;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }
    if (nivelPoder !== undefined) {
      data.nivelPoder = nivelPoder;
    }

    const planetaUpdated = await prisma.planeta.update({
      where: {
        planetaId: Number(id),
      },
      data,
    });

    return planetaUpdated;
  }

  // Remover um planeta
  async delete(planetaId) {
    const planeta = await this.findById(planetaId);

    if (!planeta) {
      return null;
    }

    await prisma.planeta.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new PlanetaModel();