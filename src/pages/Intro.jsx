import "../css/Intro.css";
import { useNavigate } from "react-router";
import laptop from "../assets/png/laptop_no_background-removebg-preview.png";

const Intro = () => {
  const nav = useNavigate();

  return (
    <div className="Intro" onClick={() => nav("/home")}>
      <img className="laptop_img" src={laptop} />
    </div>
  );
};

export default Intro;
