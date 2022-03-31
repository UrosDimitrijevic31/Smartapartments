import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const useAxiosPost = (url, payload) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(
                    url, 
                    payload
                );

                setData(response.data);
            } catch (error) {
                setError(error.message)
            } finally {
                setLoaded(true);
            }
        })()
    }, []);

    return { data, error, loaded};
};