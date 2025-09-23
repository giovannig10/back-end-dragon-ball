-- CreateTable
CREATE TABLE "racas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descricao" TEXT,
    "caracteristicas" TEXT,
    "habilidadesEspeciais" TEXT,
    "nivelPoderMedio" TEXT,
    "planetaId" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "racas_planetaId_fkey" FOREIGN KEY ("planetaId") REFERENCES "planetas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "planetas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "descricao" TEXT,
    "nivelPoder" TEXT,
    "imageUrl" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ki" TEXT,
    "racaId" INTEGER NOT NULL,
    "planetaId" INTEGER NOT NULL,
    "tecnicasEspeciais" TEXT,
    "sagas" TEXT,
    "transformacoes" TEXT,
    "biografia" TEXT,
    "imageUrl" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "personagens_racaId_fkey" FOREIGN KEY ("racaId") REFERENCES "racas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "personagens_planetaId_fkey" FOREIGN KEY ("planetaId") REFERENCES "planetas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "racas_name_key" ON "racas"("name");

-- CreateIndex
CREATE UNIQUE INDEX "planetas_name_key" ON "planetas"("name");
