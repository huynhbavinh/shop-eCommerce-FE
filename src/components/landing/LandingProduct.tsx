import { Box, Button } from '@mui/material'
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
                    <Box key={product.id} sx={{ flexBasis: '20%', margin: '0.5rem' }}>
                        <ProductCard />
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                <Button variant="outlined" color='inherit'
                    sx={{
                        width: '20%', textTransform: 'capitalize', fontWeight: 'bold', backgroundColor: 'whitesmoke', color: '#D198AB', fontSize: '1.2rem'
                    }}>
                    Show more
                </Button>
            </Box>
        </>
    )
}
