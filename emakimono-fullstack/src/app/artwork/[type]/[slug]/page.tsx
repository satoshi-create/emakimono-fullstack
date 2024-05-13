import prisma from "@/lib/prisma";
import emakisdata from "@/lib/json-data/nine-stages-of-decay.json";

export async function generateStaticParams() {
  const data = await prisma.emakiMetaData.findMany();
  return data.map((item) => ({
    type : item.type,
    slug: item.titleen,
  }));
}


export default async function Page({
  params,
}: {
  params: { type: string; slug: string };
}) {
  const { type, slug } = params;
  const data = await prisma.emakiMetaData.findUnique({
    where: {
      titleen: slug,
    },
    include: {
      type: true,
      keyword:true
    },
  });

  const dataTime = data.createdAt;
  const dt = new Date(dataTime);
  const dtJp = dt.toLocaleString()
  console.log(data);
  console.log(dtJp);

    const findEmakiData = emakisdata.find(
      (item, index) => item.titleen === slug
    );
  const emakidata = findEmakiData?.data
  console.log(emakidata);
  
  return (
    <>
      <div>{data?.title}</div>
      <div>{data?.id}</div>
      <div>{dtJp}</div>
      <div>{ data?.keyword.map((item,i) => item.name)}</div>
      <div>{ data?.type.map((item,i) => item.name)}</div>
      <div>
        {emakidata?.map((item, i) => item?.chapter)}
      </div>
    </>
  );
  // ...
}
