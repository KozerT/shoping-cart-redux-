import classes from "./Products.module.css";
import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product"
        />
      </ul>
    </section>
  );
};

export default Products;
