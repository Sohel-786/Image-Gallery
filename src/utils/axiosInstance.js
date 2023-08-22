import axios from "axios";

export const AxiosInstance = axios.create({
    baseURL : 'https://api.slingacademy.com/v1/sample-data/photos'
})