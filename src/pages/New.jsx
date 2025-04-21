import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { createMemorialHalls } from "../services/MemorialHallsService";
import "../css/New.css";

const New = () => {
  const nav = useNavigate();

  const onSubmit = (input) => {
    createMemorialHalls(input);

    nav("/", { replace: true });
  };

  return (
    <div>
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
