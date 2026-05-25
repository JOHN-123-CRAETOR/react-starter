import React, {useState, useEffect} from 'react';

export function useDebounce(value, delay = 500){

    const [debounce, setDebounce] = useState(value);

    useEffect(() => {
       const timerId = setTimeout(() => {
            setDebounce(value);
       }, delay);

        return () => {
            clearTimeout(timerId);
        }
    }, [value, delay]);

    return debounce;
}
export default useDebounce;