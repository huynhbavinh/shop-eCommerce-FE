import { getTop10SalesProduct } from '../../api/products'
import useQueryCustom from '../useQueryCustom';

export default function useGetTopTenProduct() {
    const products = useQueryCustom(['products', 'topSalesProducts', 'landingPage'], getTop10SalesProduct())
    return products;
}
