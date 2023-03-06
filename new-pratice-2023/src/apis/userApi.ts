import { backendHttpClient } from "./httpClient";

export const getUser = async (data) => {
  return await backendHttpClient.get(`/users/test`);
};

export const getAuth = async () => {
  return await backendHttpClient.get(`/users/auth`);
};
