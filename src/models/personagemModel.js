import prisma from "../../prisma/prisma.js";

class PersonagemModel {
  // Obter todos os personagens
  async findAll() {
    const personagens = await prisma.personagem.findMany({

    });

    console.log(personagens);

    return personagens;
  }

  // Obter um personagem pelo ID
  async findById(id) {
    const personagem = await prisma.personagem.findUnique({
      where: {
        id: Number(id),
      },
    });

    return personagem;
  }

  // Criar um novo personagem
  async create(
    imageUrl,
    name,
    ki,
    planetaId,
    racaId,
    tecnicasEspeciais,
    transformacoes,
    sagas,
    biografia

  ) {
    const newPersonagem = await prisma.personagem.create({
      data: {
        imageUrl,
    name,
    ki,
    tecnicasEspeciais,
    transformacoes,
    sagas,
    biografia,
    planetaId: Number(planetaId),
    racaId: Number(racaId)
      },
    });

    return newPersonagem;
  }

  // Atualizar um personagem
  async update(
    id,
    imageUrl,
    name,
    ki,
    planetaId,
    racaId,
    tecnicasEspeciais,
    transformacoes,
    sagas,
    biografia
    
  ) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    // Atualize o personagem existente com os novos dados
    const data = {};
    if (name !== undefined) {
      data.name = name;
    }
    if (biografia !== undefined) {
      data.biografia = biografia;
    }
    if (ki !== undefined) {
      data.ki = ki;
    }
    if (planetaId !== undefined) {
      data.planetaId = Number(planetaId);
    }
    if (racaId !== undefined) {
      data.racaId = Number(racaId);
    }
    if (tecnicasEspeciais!== undefined) {
      data.tecnicasEspeciais = tecnicasEspeciais;
    }
    if (transformacoes !== undefined) {
      data.transformacoes = transformacoes;
    }
    if (sagas !== undefined) {
      data.sagas = sagas;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const personagemUpdated = await prisma.personagem.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return personagemUpdated;
  }

  // Remover um personagem
  async delete(id) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    await prisma.personagem.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new PersonagemModel();
