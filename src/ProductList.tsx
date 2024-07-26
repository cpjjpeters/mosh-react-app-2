import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products in category:", category);
    setProducts(["clothing", "electronics"]);
  }, [category]);

  return (
    <>
      <div>ProductList</div>
    </>
  );
};

export default ProductList;
