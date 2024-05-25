import axios from 'axios';

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
const getUserOnServer = async (token) => {
  const config = getConfig(token);
  return axios.get(baseUrl + "getuser", config).then(res=>res)
}


export const UserAPI = {loginOnServer, registerOnServer, logoutOnServer, getUserOnServer}