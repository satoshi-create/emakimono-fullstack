import prisma from "@/lib/prisma";

type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams() {
  const test = await prisma.test.findMany();
  console.log(test);
  return test.map((item) => ({
    name: item.name,
  }));
}

export default function Page({ params}:Props) {
  const slug = params.name;
  return <div>{slug}</div>;
}
