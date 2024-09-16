export function getAuthToken() {
    return localStorage.getItem('token');
}

export function tokenLoader() {
    return getAuthToken();
}

export function getUserId() {
    return localStorage.getItem("userId");
}