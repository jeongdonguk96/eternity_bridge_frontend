import "../css/MemorialItem.css";

const MemorialItem = ({ id, name }) => {
  return (
    <div className="MemorialItem">
      {id}, {name}
    </div>
  );
};

export default MemorialItem;
