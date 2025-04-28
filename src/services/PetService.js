import axios from "axios";

const API_URL = "http://localhost:8080/api/pets";

export const createPet = async (data) => {
  try {
    const response = await axios.post(`${API_URL}`, data);

    if (response.status >= 200 && response.status < 300) {
      return response.data.data;
    } else {
      console.error("반려동물 등록 실패 (예외 처리 필요)", response);
      throw new Error("반려동물 등록 실패");
    }
  } catch (error) {
    console.error("반려동물 등록 중 오류 발생:", error);
    throw error;
  }
};
