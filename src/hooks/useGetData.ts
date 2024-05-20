import React, { useEffect, useState } from 'react';

import { NewsType } from '@/types/general';

export const useGetData = (): NewsType[] => {
  const [newsData, setNewsData] = useState<NewsType[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          'https://api.jsonbin.io/v3/b/664b48b1acd3cb34a84ad37c?meta=false',
        );
        const data = await response.json();
        setNewsData(data.news);
      } catch (error) {
        console.error('Error during fetching data');
      }
    })();
  }, []);

  return newsData as NewsType[];
};
