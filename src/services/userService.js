import axios from "../axios"

const handleLogin = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUser = (inputID) => {
    return axios.get(`/api/get-all-user?id=${inputID}`,);
}

export { handleLogin, getAllUser }  