import "../css/Home.css";
import { useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MemorialList from "../components/MemorialList";
import Button from "../components/Button";
import { getMemorialHalls } from "../services/MemorialHallsService";

function reducer(state, action) {
  switch (action.type) {
    case "SET_INIT_DATA":
      return action.data;
    case "CREATE":
      return [action.data, ...state];
    case "MODIFY":
      return state.map((item) =>
        item.id === action.data.id ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.data.id);
    default:
      return state;
  }
}

const Home = () => {
  const nav = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cursorValue = queryParams.get("cursorValue") || "";
  let sort = queryParams.get("sort") || "latest";

  useEffect(() => {
    if (!queryParams.has("cursorValue") || !queryParams.has("sort")) {
      const newSearchParams = new URLSearchParams();
      newSearchParams.set("cursorValue", cursorValue);
      newSearchParams.set("sort", sort);

      nav(`/home?${newSearchParams.toString()}`, { replace: true });
    }
  }, [cursorValue, sort, nav]);

  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    getMemorialHalls(cursorValue, sort).then((response) => {
      dispatch({
        type: "SET_INIT_DATA",
        data: response.data.valueList.content,
      });
    });
  }, []);
  console.log(data);

  return (
    <div className="Home">
      <Button text={"추모관 생성"} onClick={() => nav("/new")} />
      <MemorialList data={data} />
    </div>
  );
};

export default Home;
