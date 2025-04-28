import axios from "axios";

const API_URL = "http://localhost:8080/api/memorials";

export const getMemorialHalls = (cursorValue, sort) => {
  return axios.get(`${API_URL}?cursorValue=${cursorValue}&sort=${sort}`);
};

export const createMemorialHall = (data) => {
  return axios.post(`${API_URL}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const modifyMemorialHall = (data) => {
  return axios.put(`${API_URL}/${data.id}`, data);
};

export const deleteMemorialHall = (data) => {
  return axios.delete(`${API_URL}/${data.id}`);
};
