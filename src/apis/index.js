import axios from "axios";

axios.defaults.baseURL = "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students";

export const getUsersAPI = async () =>
  axios.get("https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students");

export const getUserByIdAPI = async (id) =>
  axios.get(`https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students/${id}`);

export const createUserAPI = async (user) =>
  axios.post(`https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students`, user);

export const updateUserAPI = async (user) =>
  axios.put(`https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students/${user.id}`, user);

export const deleteUserByIdAPI = async (id) =>
  axios.delete(`https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/students/${id}`);
