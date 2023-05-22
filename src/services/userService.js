import axios from "../axios"

const handleLoginService = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUserService = (inputID) => {
    return axios.get(`/api/get-all-user?id=${inputID}`,);
}

const createUserService = (data) => {
    return axios.post('/api/create-user', data)
}

export { handleLoginService, getAllUserService, createUserService }  