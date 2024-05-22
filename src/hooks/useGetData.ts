import React, { useEffect, useState } from 'react';

import { fetchData } from '@/api/fetchData';
import { NewsType } from '@/types/general';

export const useGetData = (): NewsType[] => {
  const [newsData, setNewsData] = useState<NewsType[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData();
        setNewsData(response);
      } catch (error) {
        console.error('Error: ', error);
      }
    })();
  }, []);

  return newsData as NewsType[];
};
