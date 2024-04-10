import { useQuery } from '@tanstack/react-query';
import { getTop10SalesProduct } from '../../api/products'

const STALE_TIME = 1 * 60 * 1000;

export default function useGetTopTenProduct() {
    const products = useQuery({
        queryKey: ['products', 'topSalesProducts', 'landingPage'],
        queryFn: () => getTop10SalesProduct(),
        staleTime: STALE_TIME,
    })
    return products;
}
