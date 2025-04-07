import "./Card.css";
// import Title from "./Title";
import Features from "./Features";
import Price from "./Price";

export default function Card({ title, idx }) {
  let Stl = {};
  let oldPrices = ["12485", "11900", "1599", "599"];
  let newPrices = ["8999", "9199", "899", "278"];
  let Description = [
    ["8,000 DPI", "5 Programmable buttons"],
    ["Intuitive Surface", "designed for iPad Pro"],
    ["Designed for iPad Pro", "Intuitive Surface"],
    ["Wireless", "optical orientation"],
  ];
  return (
    <div className="Card">
      <h3>{title}</h3>
      <img src="" alt="" />
      <ul>
        <li>{Description[idx][0]}</li>
        <li>{Description[idx][1]}</li>
      </ul>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}
