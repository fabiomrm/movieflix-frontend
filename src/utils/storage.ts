import { LoginResponse } from "types";

const TOKEN_KEY = 'authData';

export const saveAuthData = (obj: LoginResponse): void => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(obj));
};

export const getAuthData = (): LoginResponse => {
    const str = localStorage.getItem(TOKEN_KEY) ?? "{}";

    return JSON.parse(str);
}

export const removeAuthData = () => {
    localStorage.removeItem(TOKEN_KEY);
}