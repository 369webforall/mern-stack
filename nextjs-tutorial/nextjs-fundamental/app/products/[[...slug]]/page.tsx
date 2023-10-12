interface Props {
  params: { slug: string[] };
}

const ProductPageDetails = ({ params: { slug } }: Props) => {
  return <div> Product page and route is {slug} </div>;
};

export default ProductPageDetails;
