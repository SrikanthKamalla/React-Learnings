import "./Product.css";

function Product({ title, price }) {
  let isDiscount = price > 30000;
  const styles = {
    backgroundColor: "red",
    border: "2px solid black",
    borderRadius: "10px",
  };
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>Price: {price}</p>
      {isDiscount && <p style={styles}>5% Discount</p>}
    </div>
  );
}

export default Product;
