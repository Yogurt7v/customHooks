import  { useState } from "react";

export function useLocalStorage(key) {

    const [token, setToken] = useState(localStorage.getItem(key));

    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        setToken(value);
    }

    const removeItem = () => {
        localStorage.removeItem(key);
        setToken(null);
    }

    return [token, {setItem, removeItem } ]; 
}