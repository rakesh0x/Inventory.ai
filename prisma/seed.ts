
import { PrismaClient } from "../lib/generated/prisma";
import Data from '../app/dashboard/data.json';

const prisma = new PrismaClient();

interface InventoryItem {
  id: number;
  header: string;
  type: string;
  status: string;
  target: string;
  limit: string;
  reviewer: string;
}

async function main() {
  for (const item of Data as InventoryItem[]) {
    try {
      const target = parseInt(item.target);
      const limit = parseInt(item.limit);

      await prisma.inventory.create({
        data: {
          inStocks: limit,
          Targets: target,
          assigned: {
            create: {
              name: item.reviewer,
              totalProductAssigned: limit
            }
          }
        }
      });

      console.log(` Created inventory item: ${item.header}`);
    } catch (error) {
      console.error(` Error creating item ${item.header}:`, error);
    }
  }
}

main()
  .catch(e => {
    console.error('Script error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
