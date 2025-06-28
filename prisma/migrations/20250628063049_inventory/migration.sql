-- CreateTable
CREATE TABLE "Inventory" (
    "Id" SERIAL NOT NULL,
    "Revenue" DOUBLE PRECISION NOT NULL,
    "inStocks" INTEGER NOT NULL,
    "Targets" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "assignees" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "totalProductAssigned" INTEGER NOT NULL,
    "inventoryId" INTEGER NOT NULL,

    CONSTRAINT "assignees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "assignees" ADD CONSTRAINT "assignees_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "Inventory"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
