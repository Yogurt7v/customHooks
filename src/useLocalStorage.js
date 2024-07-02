export function useLocalStorage(key) {

    const setItem = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const removeItem = () => {
        localStorage.removeItem(key);
    }

    return [key, {setItem, removeItem } ]; 
}