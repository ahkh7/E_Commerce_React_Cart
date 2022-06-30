import { useCallback, useState } from 'react';

const useHttp = () => {
   const [isLoading, setIsLoading] = useState(false);
   const [httpError, setHttpError] = useState(null);

   const sendRequest = useCallback(async (requestConfig, applyData) => {
      setIsLoading(true);
      setHttpError(null);
      try {
         const response = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.headers
               ? JSON.stringify(requestConfig.body)
               : null
         });

         if (!response.ok) {
            throw new Error('Something went wrong!');
         }

         const data = await response.json();
         applyData(data);
         setIsLoading(false);
      } catch (error) {
         setIsLoading(false);
         setHttpError(error.message);
      }
   }, []);
   return {
      isLoading: isLoading,
      httpError: httpError,
      sendRequest: sendRequest
   };
};

export default useHttp;
