import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://travel-ease-server-navy.vercel.app/",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
