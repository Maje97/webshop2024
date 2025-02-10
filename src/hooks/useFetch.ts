"use client";

import { useState, useEffect } from "react";

export default function useFetch<T>(URL: string) {
    const [data, setData] = useState<null | T>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
              const response = await fetch(URL);
              const jsonData = await response.json();
              setData(jsonData);
            } catch (error) {
              setError(error);
            }
            setIsLoading(false);
        }
        fetchData();
    },[URL]);

    return { data, isLoading, error };
}