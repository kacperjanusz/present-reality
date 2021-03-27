import { useEffect, useState } from 'react';
import { getFakeNews, getRealNews, mockData } from '../api/thenewsapi';

const useGameData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const realNews = getRealNews();
        const fakeNews = getFakeNews();
        const [real, fake] = await Promise.all([realNews, fakeNews]);
        setData({ real, fake });
        setIsError(false);
        setIsLoading(false);
      } catch (ex) {
        setData(mockData);
        setIsLoading(false);
        setIsError(true);
      }
    })();
  }, []);

  return { data, isLoading, isError };
};

export { useGameData };
