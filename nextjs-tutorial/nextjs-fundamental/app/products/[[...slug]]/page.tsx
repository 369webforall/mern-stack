import React from 'react';
interface Props {
  params: {
    slug: string[];
  };
}
const ProductDetails = ({ params: { slug } }: Props) => {
  return <div>ProductDetails {slug}</div>;
};

export default ProductDetails;
