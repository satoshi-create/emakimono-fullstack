import prisma from "@/lib/prisma";

const Page = async () => {
  const test = await prisma.test.findMany();
console.log(test);

  return (
    <div className="m-8">
      test
    </div>
  );
};

export default Page;
