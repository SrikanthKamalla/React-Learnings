import "./Price.css";

export default function Price({ oldPrice, newPrice }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  return (
    <div className="Price">
      <p className="old-price">
        {formatPrice(oldPrice)} <sup>00</sup>
      </p>
      &nbsp;&nbsp;&nbsp;
      <p className="new-price">
        <sup>&#8377;</sup>
        {formatPrice(newPrice)} <sup>00</sup>
      </p>
    </div>
  );
}
