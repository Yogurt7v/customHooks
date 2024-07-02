import { useRef, useState } from "react";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const limit = useRef(0);

  const refetch = async (objParams) => {
    limit.current += 1;
    setData(null);
    setError(null);
    setIsLoading(true);
    try {
      if (limit.current > objParams.params._limit) {
        setError(true);
        throw new Error("Превышен лимит запросов");
      } else {
          
      }
      const response = await fetch(url);

      if (!response.ok) {
        setError(true);
        throw new Error("Ошибка запроса");
      }
      const resData = await response.json();
      setData(resData);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, refetch };
};
