export const API_ROUTES = {
    login: `http://localhost:5500/api/auth/login`,
    signup: `http://localhost:5500/api/auth/signup`,
    me: `http://localhost:5500/api/auth/me`,
}

export const header = () => {
    let token = localStorage.getItem('TOKEN');
    return {
        headers: { authorization: `bearer ${JSON.parse(token)}` }
    }
}