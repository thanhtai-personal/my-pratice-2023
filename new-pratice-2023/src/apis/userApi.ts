import { backendHttpClient } from "./httpClient";

export const toggleFollow = async (data) => {
  return await backendHttpClient.post(`/users/test`, data);
};
