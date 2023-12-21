import { useState } from 'react';

export const useSafeLocalStorage = <T>(
    key: string,
    initialValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once

    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);

            return item ? <T>JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);

            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that persists the new value of localStorage

    const setValue = (value: T | React.SetStateAction<T>) => {
        try {
            // Allow value to be a function so we have same API as useState

            const valueToStore = value instanceof Function ? value(storedValue) : value;

            // Save state
            setStoredValue(valueToStore);

            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
};
