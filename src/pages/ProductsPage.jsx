import React from "react";
import { useProducts } from "../context/ProductProvider";
import styles from "./ProductsPage.module.css";
function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>loading</p>}
        {products.map((product) => (
          <p>{product.title}</p>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
