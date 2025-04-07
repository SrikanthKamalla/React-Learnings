import "./ProductTabs.css";
import Product from "./Product";
function ProductTabs() {
  return (
    <div className="ProductTabs">
      <Product title="Phone" price={17000} />
      <Product title="Laptop" price={72000} />
      <Product title="Tablet" price={39000} />
    </div>
  );
}
export default ProductTabs;
