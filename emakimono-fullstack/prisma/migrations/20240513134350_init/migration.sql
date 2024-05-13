-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmakiMetaData" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "titleen" TEXT NOT NULL,
    "thumb" TEXT,
    "desc" TEXT,
    "kotobagaki" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "EmakiMetaData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Keyword" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameen" TEXT NOT NULL,

    CONSTRAINT "Keyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameen" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EmakiMetaDataToKeyword" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EmakiMetaDataToType" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "EmakiMetaData_titleen_key" ON "EmakiMetaData"("titleen");

-- CreateIndex
CREATE UNIQUE INDEX "Keyword_nameen_key" ON "Keyword"("nameen");

-- CreateIndex
CREATE UNIQUE INDEX "Type_nameen_key" ON "Type"("nameen");

-- CreateIndex
CREATE UNIQUE INDEX "_EmakiMetaDataToKeyword_AB_unique" ON "_EmakiMetaDataToKeyword"("A", "B");

-- CreateIndex
CREATE INDEX "_EmakiMetaDataToKeyword_B_index" ON "_EmakiMetaDataToKeyword"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EmakiMetaDataToType_AB_unique" ON "_EmakiMetaDataToType"("A", "B");

-- CreateIndex
CREATE INDEX "_EmakiMetaDataToType_B_index" ON "_EmakiMetaDataToType"("B");

-- AddForeignKey
ALTER TABLE "_EmakiMetaDataToKeyword" ADD CONSTRAINT "_EmakiMetaDataToKeyword_A_fkey" FOREIGN KEY ("A") REFERENCES "EmakiMetaData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmakiMetaDataToKeyword" ADD CONSTRAINT "_EmakiMetaDataToKeyword_B_fkey" FOREIGN KEY ("B") REFERENCES "Keyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmakiMetaDataToType" ADD CONSTRAINT "_EmakiMetaDataToType_A_fkey" FOREIGN KEY ("A") REFERENCES "EmakiMetaData"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmakiMetaDataToType" ADD CONSTRAINT "_EmakiMetaDataToType_B_fkey" FOREIGN KEY ("B") REFERENCES "Type"("id") ON DELETE CASCADE ON UPDATE CASCADE;
