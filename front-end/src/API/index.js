import axios from "axios";
//ROUTES
export const API_ROUTES = {
    login: `http://localhost:5500/api/auth/login`,
    signup: `http://localhost:5500/api/auth/signup`,
    me: `http://localhost:5500/api/auth/me`,
    uploadCover: `http://localhost:5500/api/auth/uploadCoverImg`,
    post: `http://localhost:5500/api/post/`,
    userPosts: `http://localhost:5500/api/post/userPosts`,


}

//AUTH
let defaultConfig = {
    formData: false,
}

export const header = (config = defaultConfig) => {
    let token = localStorage.getItem('TOKEN');
    return {
        headers: {
            'Content-Type': config.formData ? 'multipart/form-data' : 'application/json',

            authorization: `bearer ${JSON.parse(token)}`
        }
    }
}

//CALL API

export const getAllPosts = async () => {
    return await axios.get(API_ROUTES.post, header())
        .then((res) => res)
        .catch((error) => console.log(error))
};

export const getuserPosts = async () => {
    return await axios.get(API_ROUTES.userPosts, header())
        .then((res) => res)
        .catch((error) => console.log(error))
};

export const deletePost = async (dataIndex) => {
    return await axios.delete(API_ROUTES.post + dataIndex._id, header())
        .then((res) => res)
        .catch((error) => console.log(error))
};




