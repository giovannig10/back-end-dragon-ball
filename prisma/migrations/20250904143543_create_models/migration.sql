/*
  Warnings:

  - You are about to drop the `animes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `collections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `age` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `anime` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `power` on the `personagens` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `personagens` table. All the data in the column will be lost.
  - Added the required column `atualizadoEm` to the `personagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `personagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planetaId` to the `personagens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `racaId` to the `personagens` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "cards_name_key";

-- DropIndex
DROP INDEX "collections_name_key";

-- DropIndex
DROP INDEX "users_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "animes";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cards";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "collections";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "racas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "mundoNatal" TEXT,
    "habilidades" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "planetas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "galaxia" TEXT,
    "populacao" TEXT,
    "clima" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "ki" INTEGER,
    "racaId" INTEGER NOT NULL,
    "planetaId" INTEGER NOT NULL,
    "tecnicasEspeciais" TEXT,
    "aparicoesSagas" TEXT,
    "transformacoes" TEXT,
    "biografia" TEXT,
    "imagemUrl" TEXT,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" DATETIME NOT NULL,
    CONSTRAINT "personagens_racaId_fkey" FOREIGN KEY ("racaId") REFERENCES "racas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "personagens_planetaId_fkey" FOREIGN KEY ("planetaId") REFERENCES "planetas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_personagens" ("id") SELECT "id" FROM "personagens";
DROP TABLE "personagens";
ALTER TABLE "new_personagens" RENAME TO "personagens";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "racas_nome_key" ON "racas"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "planetas_nome_key" ON "planetas"("nome");
