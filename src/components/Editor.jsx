import "../css/Editor.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { createImage } from "../services/ImageService";
import { ImageDomain } from "../enums/ImageDomain";

const Editor = ({ onSubmit }) => {
  const nav = useNavigate();
  const [step, setStep] = useState(1); // 현재 단계 (1: 이미지 등록, 2: 정보 입력)
  const [input, setInput] = useState({
    name: "",
    nickname: "",
    petType: "",
    birthDate: "",
    deathDate: "",
    profileImage: null,
    profileImageUrl: "",
    dotImageUrl: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "birthDate" || name === "deathDate") {
      value = new Date(value).toISOString().split("T")[0];
    }

    if (name === "profileImage") {
      value = e.target.files[0]; // 파일 객체 저장
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  // 이미지를 등록하고 다음 입력 화면으로 넘어간다.
  const onNextStep = async () => {
    if (!input.profileImage) {
      alert("이미지를 먼저 등록해주세요.");
      return;
    }

    await callCreateImage(); // 이미지를 우선 등록한다.
    setStep(2); // 다음 단계로 이동한다.
  };

  // 이미지 등록 API를 호출한다.
  const callCreateImage = async () => {
    const profileImageUrl = await createImage(
      input.profileImage,
      ImageDomain.PET
    );

    setInput((prevInput) => ({
      ...prevInput,
      profileImageUrl: profileImageUrl,
    }));
  };

  // 모든 정보를 입력하고 반려동물과 추모관을 등록한다.
  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      {step === 1 ? (
        // 1단계: 이미지 등록 화면
        <section className="image_section">
          <h4>프로필 사진</h4>
          <input type="file" name="profileImage" onChange={onChangeInput} />
          <Button text={"다음"} type={"POSITIVE"} onClick={onNextStep} />
        </section>
      ) : (
        // 2단계: 정보 입력 화면
        <>
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
          <section className="button_section">
            <Button text={"취소하기"} onClick={() => nav(-1)} />
            <Button
              text={"생성"}
              type={"POSITIVE"}
              onClick={onClickSubmitButton}
            />
          </section>
        </>
      )}
    </div>
  );
};

export default Editor;
