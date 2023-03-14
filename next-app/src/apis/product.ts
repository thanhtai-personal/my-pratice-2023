import { backendHttpClient } from "./httpClient";

export const createProduct = async (data) => {
  return await backendHttpClient.post(`/api/products/create`, data);
};

export const getProducts = async () => {
  return await backendHttpClient.get(`/api/products/get`);
};
