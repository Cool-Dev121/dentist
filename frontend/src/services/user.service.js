import axios from "axios";

const API_URL = "http://localhost:8080/api/user/";

const getAll = (role) => {
  return axios.get(API_URL + `getall/${role}`);
};


const get = id => {
  return axios.get(API_URL + `find/${id}`);
};

const create = (data) => {
  
  return axios.post(API_URL+ "create", data);
};

const update = (id, data) => {
  return axios.post(API_URL + `update/${id}`, data);
};

const remove = (id) => {
  return axios.delete(API_URL + `delete/${id}`);
};

const removeAll = async () => {
  return await axios.delete(API_URL + 'removeall');
};

const findBy = (name, role) => {
  return axios.get(API_URL + `findby?name=${name}&role=${role}`);
};


const UserService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findBy
};

export default UserService;
