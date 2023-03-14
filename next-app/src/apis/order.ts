import { backendHttpClient } from "./httpClient";

export const createOrder = async (data) => {
  return await backendHttpClient.post(`/api/orders/create`, data);
};

export const getOrders = async () => {
  return await backendHttpClient.get(`/api/orders/get`);
};
