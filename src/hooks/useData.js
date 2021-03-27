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
        setIsError(false);
        setIsLoading(false);
        setData({ real, fake });
      } catch (ex) {
        setData(mockData);
        setIsError(true);
      }
    })();
  }, []);

  return { data, isLoading, isError };
};

export { useGameData };
