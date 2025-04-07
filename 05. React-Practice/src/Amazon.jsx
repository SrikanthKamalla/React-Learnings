import "./Amazon.css";
import Card from "./Card";
export default function Amazon() {
  return (
    <div className="Amazon">
      <Card title="Logitech MX master 35" idx={0} />
      <Card title="Apple Pencil (2nd Gen)" idx={1} />
      <Card title="Zebronics Zeb-Transformer" idx={2} />
      <Card title="Portronics Toad Mouse" idx={3} />
    </div>
  );
}
