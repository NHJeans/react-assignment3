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
    const { data } = await authApi.post('/login', {
      id,
      password,
    });
    return data
  } catch (error) {
    alert(error?.response?.data?.message);
    throw error;
  }
};

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return;
  }
  try {
    const { data } = await authApi.get('/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return data;
  } catch (error) {
    alert(error?.response?.data?.message);
    throw error;
  }
}

export const updateProfile = async (formData) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const { data } = await authApi.patch('/profile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`
        }
      });
      return data;
    } catch (error) {
      alert(error?.response?.data?.message);
      throw error;
    }
  }
};