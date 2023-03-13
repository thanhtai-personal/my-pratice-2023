import { backendHttpClient } from "./httpClient";

export const createCategory = async (data) => {
  return await backendHttpClient.post(`/api/categories/create`, data);
};
