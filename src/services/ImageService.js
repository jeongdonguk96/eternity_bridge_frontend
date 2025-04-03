import axios from "axios";

const API_URL = "http://localhost:8080/api/images";

export const createImage = async (file, domain) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("domain", domain);

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      console.error("이미지 업로드 실패 (예외 처리 필요)", response);
      throw new Error("이미지 업로드 실패");
    }
  } catch (error) {
    console.error("이미지 업로드 중 오류 발생:", error);
    throw error;
  }
};
