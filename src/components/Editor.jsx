import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "../css/Editor.css";

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState({
    name: "",
    nickname: "",
    petType: "",
    birthDate: "",
    deathDate: "",
    profileImage: "",
    dotImage: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "birthDate" || name === "deathDate") {
      value = new Date(value);
    }

    if (name === "profileImage") {
      value = new File(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="name_section">
        <h4>이름</h4>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={onChangeInput}
        />
        <h4>별명</h4>
        <input
          type="text"
          name="nickname"
          value={input.nickname}
          onChange={onChangeInput}
        />
        <h4>품종</h4>
        <input
          type="text"
          name="petType"
          value={input.petType}
          onChange={onChangeInput}
        />
      </section>
      <section className="date_section">
        <h4>생일</h4>
        <input
          type="date"
          name="birthDate"
          value={input.birthDate}
          onChange={onChangeInput}
        />
        <h4>사망일</h4>
        <input
          type="date"
          name="deathDate"
          value={input.deathDate}
          onChange={onChangeInput}
        />
      </section>
      <section className="image_section">
        <h4>프로필 사진</h4>
        <input
          type="file"
          name="profileImage"
          value={input.profileImage}
          onChange={onChangeInput}
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} onClick={() => nav(-1)} />
        <Button text={"생성"} type={"POSITIVE"} onClick={onClickSubmitButton} />
      </section>
    </div>
  );
};

export default Editor;
