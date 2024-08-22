// queries/queries.ts
import { useQueries } from '@tanstack/react-query';
import { BackendURL, TServerDetailProps } from '../lib/constants';
export const usePingQueries = (ipList: string[], options: any) => {
  return useQueries({
    queries: ipList.map(ip => ({
      queryKey: ['ping', ip],
      queryFn: async () :Promise<TServerDetailProps> => {
        const res = await fetch(`${BackendURL}/ping?ip=${ip}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      },
      ...options, 
    }))
  });
};
