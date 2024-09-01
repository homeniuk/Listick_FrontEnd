import axios from 'axios';

axios.defaults.withCredentials = true;
const baseUrl = "https://listicks001api.onrender.com/";

const getConfig = () => {
  const accessToken = localStorage.getItem('accessToken');
    return {
      headers: {
        Authorization: "Bearer " + accessToken
      }
    }
}

const instanceListick = axios.create({
  baseURL: baseUrl
})

instanceListick.interceptors.response.use(
  (response)=>{
    return response;
  }, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
      try {
      
          const res = await axios.get(baseUrl + "refreshtoken");
          localStorage.setItem('accessToken', res.data.accessToken);
          originalRequest.headers.Authorization = 'Bearer ' + res.data.accessToken;
          return instanceListick.request(originalRequest);
      } catch (e) {
          console.log('Error')
          localStorage.removeItem('accessToken');
      }
    }
    return error.response;
  }
);

const getAllListicksOnServer = async (token) => {
  const config = getConfig();
  return axios.get(baseUrl + "getAllListicks", config).then(res=>res)
}

const saveAllListicksOnServer = async (list) => {
  const config = getConfig();
  return axios.post(baseUrl + "saveAllListicks", {list}, config).then(res=>res)
}

const saveListickOnServer = async (listick) => {
  const config = getConfig();
  return axios.post(baseUrl + "saveListick", listick, config).then(res=>res)
}
const deleteListickOnServer = async (id) => {
  const config = getConfig();
  return axios.delete(baseUrl + "deleteListick?id=" + id, config).then(res=>res)
}

export const ListickAPI = {getAllListicksOnServer, 
  saveAllListicksOnServer, 
  saveListickOnServer, 
  deleteListickOnServer}