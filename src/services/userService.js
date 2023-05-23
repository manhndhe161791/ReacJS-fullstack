import axios from "../axios"

const handleLoginService = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });
}

const getAllUserService = (inputID) => {
    return axios.get(`/api/get-all-user?id=${inputID}`,);
}

const createUserService = (data) => {
    return axios.post('/api/create-user', data);
}

const deleteUserService = (userID) => {
    return axios.delete('/api/delete-user', { data: { id: userID } });
}

export { handleLoginService, getAllUserService, createUserService, deleteUserService }  