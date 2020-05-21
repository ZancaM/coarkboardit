const USERNAME_KEY = 'corkboardit-username';

export async function logIn(username, pin) {
    // Simulate api call to validate login
    await new Promise(resolve => setTimeout(resolve, 1000));
    localStorage.setItem(USERNAME_KEY, username);
}

export function logOut() {
    localStorage.removeItem(USERNAME_KEY);
}

export function currentUsername() {
    return localStorage.getItem(USERNAME_KEY);
}

export function isLoggedIn() {
    return currentUsername() !== null;
}
