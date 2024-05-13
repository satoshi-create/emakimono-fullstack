import prisma from "@/lib/prisma";

export async function generateStaticParams() {
  const test = await prisma.test.findMany();
  return test.map((item) => ({
    slug: item.name,
  }));
}

export default function Page({params}: { params: { slug: String } }) {
  const slug = params.slug;
  return <div>{slug}</div>;
}