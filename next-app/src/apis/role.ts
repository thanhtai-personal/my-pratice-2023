import { backendHttpClient } from "./httpClient";

export const createRole = async (data) => {
  return await backendHttpClient.post(`/api/roles/create`, data);
};

export const getRoles = async () => {
  return await backendHttpClient.get(`/api/roles/get`);
};
