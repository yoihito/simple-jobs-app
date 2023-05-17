import { useState, useEffect } from "react";
import axios from "axios";
import Constants from "expo-constants";
import mockData from "./mockData";

const useFetch = (endpoint, query, deps = []) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {...query},
        headers: {
            'X-RapidAPI-Key': Constants?.expoConfig?.extra?.RAPID_API_KEY,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            // const response = {
            //     data: {
            //         data: mockData
            //     }
            // }
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch(error) {
            setError(error);
            alert("there is an error");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, deps);

    const refetch = () => {
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;