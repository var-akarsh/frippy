import axios from "axios";

const baseUrl = process.env.USER_BASE_URL; // Replace with your backend API base URL

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(`${baseUrl}/register`, userData, {
      headers: {
        "Content-Type": "multipart/form-data", // For handling avatar upload
      },
    });
    return response.data;
  } catch (error) {
    throw error; // Re-throw the error for handling in the component
  }
};

export const loginUser = async (credentials: any) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, credentials);
    return response.data;
  } catch (error) {
    throw error; // Re-throw the error for handling in the component
  }
};

export const logoutUser = async (token: any) => {
  try {
    const response = await axios.post(`${baseUrl}/logout`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error; // Re-throw the error for handling in the component
  }
};

export const refreshAccessToken = async (refreshToken: any) => {
  try {
    const response = await axios.post(`${baseUrl}/refresh-token`, {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error; // Re-throw the error for handling in the component
  }
};
