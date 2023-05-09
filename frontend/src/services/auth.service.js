import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = async (formData) => {
  return await axios.post(API_URL + "signup", formData)
  .then((response)=>{
    return response.data;
  })
  .catch(err=>{
    return err;
  })

};

const login = async (email, password) => {

  return await axios
  .post(API_URL + "signin", {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      
      return response.data;
    })
    .catch(err=>{
      return err;
    })
};


const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};