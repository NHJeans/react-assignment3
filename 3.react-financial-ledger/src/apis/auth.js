import { authApi } from "./axios";

export const signUp = async ({ id, nickname, password }) => {
  try {
    const { data } = await authApi.post('/register', {
      id,
      nickname,
      password,
    });
    return data
  } catch (error) {
    alert(error?.response?.data?.message);
    throw error;
  }
};

export const signIn = async ({ id, password }) => {
  try {
    const { data } = await authApi.post('/login?expiresIn=10m', {
      id,
      password,
    });
    return data
  } catch (error) {
    alert(error?.response?.data?.message);
    throw error;
  }
};