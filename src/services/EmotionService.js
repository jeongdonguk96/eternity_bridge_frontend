import axios from "axios";

const API_URL = "http://localhost:8080/api/memorials";

export const getMemorialHalls = (cursorId, sort) => {
  return axios.get(`${API_URL}?cursorId=${cursorId}&sort=${sort}`);
};

export const createMemorialHalls = (data) => {
  return axios.post(`${API_URL}`, data);
};

export const modifyMemorialHalls = (data) => {
  return axios.put(`${API_URL}/${data.id}`, data);
};

export const deleteMemorialHalls = (data) => {
  return axios.delete(`${API_URL}/${data.id}`);
};
