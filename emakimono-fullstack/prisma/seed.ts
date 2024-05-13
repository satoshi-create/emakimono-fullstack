import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const response = await Promise.all([
    await prisma.keyword.create({
      data: {
        name: "無常",
        nameen: "impermanenace",
      },
    }),
    await prisma.keyword.create({
      data: {
        name: "仏教",
        nameen: "buddhism",
      },
    }),
    await prisma.type.create({
      data: {
        name: "絵巻",
        nameen: "picture-scroll",
      },
    }),
    await prisma.type.create({
      data: {
        name: "屏風",
        nameen: "folding-screen",
      },
    }),
    await prisma.type.create({
      data: {
        name: "浮世絵",
        nameen: "ukiyoe",
      },
    }),
    await prisma.type.create({
      data: {
        name: "西洋絵画",
        nameen: "western-painting",
      },
    }),
    await prisma.type.create({
      data: {
        name: "扇面画",
        nameen: "folding-fan-art",
      },
    }),
  ]);

  console.log({ response });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
