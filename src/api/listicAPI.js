import axios from 'axios';

const baseUrl = "http://127.0.0.1:5000/";

const getConfig = (token) => {
    return {
      headers: {
        Authorization: "Bearer " + token
      }
    }
}

const instance = axios.create({
  withCredentials: true,
  baseURL: baseUrl
})

const getAllListicksOnServer = async (token) => {
    const config = getConfig(token);
    return axios.get(baseUrl + "getAllListicks", config).then(res=>res)
  }

export const ListickAPI = {getAllListicksOnServer}