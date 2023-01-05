import axios from "axios";
let API = process.env?.REACT_APP_API || `http://localhost:5500/`

//ROUTES
export const API_ROUTES = {
    //api/auth
    login: `${API}api/auth/login`,
    signup: `${API}api/auth/signup`,
    me: `${API}api/auth/me`,
    getOneUser: `${API}api/auth/`,
    profileUpdate: `${API}api/auth/profileUpdate`,
    uploadCover: `${API}api/auth/uploadCoverImg`,
    uploadAvatar: `${API}api/auth/uploadAvatarImg`,
    search: `${API}api/auth/search`,
    // api/post
    post: `${API}api/post/`,
    userPosts: `${API}api/post/userPosts`,
    likedPosts: `${API}api/post/likedPosts`,
    like: `${API}api/post/like`,
    comment: `${API}api/comment/`,
    //chatRoutes
    conversations: `${API}api/chat/conversations/`,
    messages: `${API}api/chat/messages/`
}

//CHAT
export const getConversations = async (userId) =>
    await axios.get(API_ROUTES.conversations + userId, header())
        .then((res) => res)
        .catch((error) => console.log(error))

export const getMessages = async (conversationId) =>
    await axios.get(API_ROUTES.messages + conversationId, header())
        .then((res) => res)
        .catch((error) => console.log(error))

export const createNewMessage = async (message) =>
    await axios.post(API_ROUTES.messages, message, header())
        .then((res) => res)
        .catch((error) => console.log(error))

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

export const searchUser = async (search) => {
    return await axios.get(API_ROUTES.search, { ...header(), params: { letter: search } })
        .then((res) => res)
        .catch((error) => console.log(error))
}