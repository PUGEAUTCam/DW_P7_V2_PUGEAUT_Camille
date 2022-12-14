import axios from "axios";
//ROUTES
export const API_ROUTES = {
    login: `http://localhost:5500/api/auth/login`,
    signup: `http://localhost:5500/api/auth/signup`,
    me: `http://localhost:5500/api/auth/me`,
    getOneUser: `http://localhost:5500/api/auth/`,
    profileUpdate: `http://localhost:5500/api/auth/profileUpdate`,
    uploadCover: `http://localhost:5500/api/auth/uploadCoverImg`,
    uploadAvatar: `http://localhost:5500/api/auth/uploadAvatarImg`,
    post: `http://localhost:5500/api/post/`,
    userPosts: `http://localhost:5500/api/post/userPosts`,
    likedPosts: `http://localhost:5500/api/post/likedPosts`,
    like: `http://localhost:5500/api/post/like`,
    comment: `http://localhost:5500/api/comment/`,
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

//CALL API for the posts
export const createPost = async (formData) =>
    await axios.post(API_ROUTES.post, formData, header({ formData: true }))
        .then((res) => res)
        .catch((error) => console.log(error))

export const getAllPosts = async (page) =>
    await axios.get(API_ROUTES.post, { ...header(), params: { page } })
        .then((res) => res)
        .catch((error) => console.log(error))

export const getuserPosts = async (id) => {
    return await axios.get(API_ROUTES.userPosts, { ...header(), params: { id } })
        .then((res) => res)
        .catch((error) => console.log(error))
};

export const getLikedPosts = async () => {
    return await axios.get(API_ROUTES.likedPosts, header())
        .then((res) => res)
        .catch((error) => console.log(error))
};

export const deletePost = async (post) => {
    return await axios.delete(API_ROUTES.post + post._id, header())
        .then((res) => res)
        .catch((error) => console.log(error))
};

export const likePost = async (post) => {
    return await axios.post(API_ROUTES.like, { postId: post._id }, header())
        .then((res) => res)
        .catch((error) => console.log(error))
};

export const postUpdate = async ({ post, formData }) => {
    return await axios.patch(API_ROUTES.post + post._id, formData, header({ formData: true }))
        .then((res) => res)
        .catch((error) => console.log(error))
};

export const createComment = async ({ post, newComment }) => {
    return await axios.post(API_ROUTES.comment, {
        postId: post._id,
        message: newComment,
    }, header())
        .then(async (res) => res)
        .catch((error) => console.log(error))
};

//USER
export const profileUpdate = async (form) =>
    await axios.patch(API_ROUTES.profileUpdate, {
        phoneNumber: form.phoneNumber,
        phonePro: form.phonePro,
        actualLocation: form.actualLocation,
        birthLocation: form.birthLocation,
        biography: form.biography
    }, header())
        .then((res) => res)
        .catch((error) => console.log(error))

export const uploadCoverImg = async (formData) => {
    return await axios.post(API_ROUTES.uploadCover, formData, header({ formData: true }))
        .then(async (res) => res)
        .catch((error) => console.log(error))
};
export const uploadAvatarImg = async (formData) => {
    return await axios.post(API_ROUTES.uploadAvatar, formData, header({ formData: true }))
        .then(async (res) => res)
        .catch((error) => console.log(error))
};

export const getOneUser = async (id) => {
    return await axios.get(API_ROUTES.getOneUser + id)
        .then((res) => res)
        .catch((error) => console.log(error))
};
