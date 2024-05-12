
type Props = {
  params: {
    item: string;
  };
};
export default function Product({ params }: Props) {
  return <h1>{params.item}</h1>;
}
export function generateStaticParams() {
  const products = ["t-shirt", "pants"];
  return products.map((product) => ({
    item: product,
  }));
}
