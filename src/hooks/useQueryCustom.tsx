import { useQuery } from '@tanstack/react-query'
import { AxiosPromise } from 'axios';

const STALE_TIME = 1 * 60 * 1000;

export default function useQueryCustom(queryKeyParams: Array<unknown>, queryFnParams: AxiosPromise ) {
    const result = useQuery({
        queryKey: [...queryKeyParams],
        queryFn: () => queryFnParams,
        staleTime: STALE_TIME,
    })

    return result;
}
