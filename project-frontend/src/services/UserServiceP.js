import axios from "axios";

const userUrl = 'https://jsonplaceholder.typicode.com/users';

// const userUrl = 'http://localhost:8090/api/users';

const register = (appUser) => {
    console.log(appUser);
    return axios.post(userUrl, appUser);
};

const login = (appUser) => {
    console.log(appUser);
    return axios.get(`${userUrl}/?username=${appUser.username}`);
};

const updateUser = (appUser) => {
    console.log(appUser);
    return axios.post(userUrl, appUser);
};

const deleteUser = (appUser) => {
    console.log(appUser);
    return axios.delete(userUrl, appUser);
};

const logout = () => {
    console.log('logout');
};

const getAllUsers = () => {
    console.log('getAllUsers');
    return axios.get(userUrl);
};

// const checkUniqueUser = (appUser) => {
//     console.log(appUser);
//     const users =  axios.get(`${userUrl}`);
//     const userFound = users.find((user) => user.id === appUser.id);
//     if(userFound) return false;
//     return true;
// };

export { register, login, updateUser, logout, getAllUsers, deleteUser };