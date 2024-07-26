import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products");
    setProducts(["clothing", "electronics"]);
  });

  return (
    <>
      <div>ProductList</div>
    </>
  );
}

export default ProductList;
