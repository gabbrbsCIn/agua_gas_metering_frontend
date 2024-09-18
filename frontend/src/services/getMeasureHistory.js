import api from "./api";

export const getMeasureHistory = async (customerCode, filter) => {
  let url = `/${customerCode}/list`;
  if (filter) url += `?measure_type=${filter.toUpperCase()}`;
  const response = await api.get(`http://localhost:8000${url}`);
  console.log(response.data);
  return response;
};
