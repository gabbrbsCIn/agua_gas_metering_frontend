import api from "./api";

export const confirmMeasure = async (data) => {
    return await api.patch("http://localhost:8000/confirm", data);
  };
