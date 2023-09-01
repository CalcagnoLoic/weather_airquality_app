import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [dataWeather, setDataWeather] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${url}${import.meta.env.VITE_API_KEY}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`${res.status - res.statusText}`);
                }
                return res.json();
            })
            .then((data) => {
                setDataWeather(data);
                setIsLoading(false);
                setIsError(false);
            })
            .catch(() => {
                setIsError(true);
            });
    }, [url]);

    return { dataWeather, isLoading, isError };
};

export default useFetch;
