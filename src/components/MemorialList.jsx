import "../css/MemorialList.css";
import MemorialItem from "./MemorialItem";

const MemorialList = ({ data }) => {
  return (
    <div className="MemorialList">
      <div className="memorial_list_wrapper">
        {data.map((item) => (
          <MemorialItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MemorialList;
