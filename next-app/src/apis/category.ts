import { backendHttpClient } from "./httpClient";

export const createCategory = async (data) => {
  return await backendHttpClient.post(`/api/categories/create`, data);
};

export const getCategories = async () => {
  return await backendHttpClient.get(`/api/categories/get`);
};
