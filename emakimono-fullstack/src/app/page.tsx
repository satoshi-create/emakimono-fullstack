import prisma from "@/lib/prisma";

const Page = async () => {
  const data = await prisma.emakiMetaData.findMany();
console.log(data);

  return (
    <div className="m-8">
      test
    </div>
  );
};

export default Page;
