import "../css/MemorialItem.css";

const MemorialItem = (data) => {
  return <div className="MemorialItem">{Object.values(data).join(", ")}</div>;
};

export default MemorialItem;
