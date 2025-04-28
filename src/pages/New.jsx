import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { createMemorialHall } from "../services/MemorialHallsService";
import { createPet } from "../services/PetService";
import "../css/New.css";

const New = () => {
  const nav = useNavigate();

  const onSubmit = async (input) => {
    const petId = await createPet(input);
    await createMemorialHall({ petId: petId });

    nav("/", { replace: true });
  };

  return (
    <div>
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
