import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-javfs-be8af6f30165.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;