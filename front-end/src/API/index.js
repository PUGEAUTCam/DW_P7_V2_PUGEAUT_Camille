export const API_ROUTES = {
    login: `http://localhost:5500/api/auth/login`,
    signup: `http://localhost:5500/api/auth/signup`,
    me: `http://localhost:5500/api/auth/me`,
    post: `http://localhost:5500/api/post`,
}

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