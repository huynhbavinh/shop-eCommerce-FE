import { Box } from '@mui/material'
import useGetTopTenProduct from '../../hooks/features/useGetTopTenProduct'
import ProductCard from '../productCard/ProductCard';

export default function LandingProduct() {
    const { data } = useGetTopTenProduct();
    console.log(data)
    return (
        <>
            <Box
                component={'h1'}
                textTransform={'capitalize'}
                fontWeight={'bold'}
                textAlign={'center'}
            >
                our products
            </Box>
            <Box sx={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                {data?.data && data?.data.products.map((product) => (
                    <Box key={product.id} sx={{flexBasis: '20%', margin: '0.5rem'}}>
                        <ProductCard />
                    </Box>
                ))}
            </Box>
        </>
    )
}
