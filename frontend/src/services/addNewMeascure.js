import api from "./api";

export const addNewMeasure = async (data) => {
  console.log(data);
  const response = await api.post("http://localhost:8000/upload", data);
  return response;
};
