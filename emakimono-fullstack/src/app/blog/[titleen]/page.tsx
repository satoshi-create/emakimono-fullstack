import prisma from "@/lib/prisma";

export async function generateStaticParams() {
  const test = await prisma.emakiMetaData.findMany();
  return test.map((item) => ({
    slug: item.titleen,
  }));
}

export default async function Page({params}: { params: { slug: String } }) {
  const slug = params.slug;
  const data = await prisma.emakiMetaData.findUnique({
    where: {
      titleen:slug
    },
  });
  console.log(data);
  
  return (
    <>
    <h1>
      {data?.title}
    </h1>
    <h4>
        {data?.titleen}
    </h4>
    </>
  )
}