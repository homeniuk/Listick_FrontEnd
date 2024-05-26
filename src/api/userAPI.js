import axios from 'axios';

axios.defaults.withCredentials = true;

const baseUrl = "http://127.0.0.1:5000/";

const getConfig = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token
    }
  }
}

const loginOnServer = async (email, password) => {
  return axios.post(baseUrl + "login", {email, password}).then(res=>res)
}
const registerOnServer = async (email, password) => {
  return axios.post(baseUrl + "registration", {email, password}).then(res=>res)
}
const logoutOnServer = async () => {
  return axios.get(baseUrl + "logout").then(res=>res)
}

// + interrupt
const instance = axios.create({
  baseURL: baseUrl
})

instance.interceptors.response.use(
  (response)=>{
    return response;
  }, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
      try {
      
          const res = await axios.get(baseUrl + "refreshtoken");
          //store.dispatch(setToken({token: res.data.accessToken}));
          
          originalRequest.headers.Authorization = 'Bearer ' + res.data.accessToken;
          return instance.request(originalRequest);
      } catch (e) {
          console.log('Not registered')
      }
    }
    return error.response;
  }
);

const getUserOnServer = async (token) => {
  const config = getConfig(token);
  const data = instance.get("getuser", config);
  return data;
}


export const UserAPI = {loginOnServer, registerOnServer, logoutOnServer, getUserOnServer}