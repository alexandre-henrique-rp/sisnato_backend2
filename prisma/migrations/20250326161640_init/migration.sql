/*
  Warnings:

  - You are about to drop the `_EmpreendimentoToSolicitacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EmpreendimentoToSolicitacao" DROP CONSTRAINT "_EmpreendimentoToSolicitacao_A_fkey";

-- DropForeignKey
ALTER TABLE "_EmpreendimentoToSolicitacao" DROP CONSTRAINT "_EmpreendimentoToSolicitacao_B_fkey";

-- DropTable
DROP TABLE "_EmpreendimentoToSolicitacao";
