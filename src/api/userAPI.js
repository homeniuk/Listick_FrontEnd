import axios from 'axios';

const baseUrl = "http://127.0.0.1:5000/";

const getConfig = (token) => {
    return {
      headers: {
        token,
      }
    }
  }

const loginOnServer = async (email, password) => {
    //return axios.post(baseUrl + "login", {email, password}).then(res=>res)
    const res1 = await axios.post(baseUrl + "login", {email, password});
    return res1; 
}

export const UserAPI = {loginOnServer}