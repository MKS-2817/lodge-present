

export const saveUserToken = (token) => {
    localStorage.setItem('Token User', token);
}

export const readUserToken = () => {
    const token = localStorage.getItem('Token User');
    return token;
}

