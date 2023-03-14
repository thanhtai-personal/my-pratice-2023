import { backendHttpClient } from "./httpClient";

export const createUser = async (data) => {
  return await backendHttpClient.post(`/api/users/create`, data);
};

export const getUsers = async () => {
  return await backendHttpClient.get(`/api/users/get`);
};
