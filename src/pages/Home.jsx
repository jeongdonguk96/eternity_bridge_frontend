import MemorialList from "../components/MemorialList";
import "../css/Home.css";

const data = [
  { id: "1", name: "bona" },
  { id: "2", name: "haha" },
];

const Home = () => {
  return (
    <div className="Home">
      <MemorialList data={data} />
    </div>
  );
};

export default Home;
