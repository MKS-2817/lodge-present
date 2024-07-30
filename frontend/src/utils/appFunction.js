

export const saveUserToken = (token) => {
    localStorage.setItem('TokenSaver01', 's6z8PiKcH7iVX3YyUbcVbjjlct0h8DrRDGFpZdLCov8Ij7rHbrGfU1bjUxPWmbRX');
}

export const readUserToken = () => {
    const token = localStorage.getItem('TokenSaver01');
    return token;
}

