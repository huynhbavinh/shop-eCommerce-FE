import { Box } from '@mui/material'
import React from 'react'
import useGetTopTenProduct from '../../hooks/features/useGetTopTenProduct'
import ProductCard from '../ProductCard';

export default function LandingProduct() {
    const { data, error } = useGetTopTenProduct();
    console.log(data)
    return (
        <>
            <Box
                component={'h1'}
                textTransform={'uppercase'}
                fontWeight={'bold'}
                textAlign={'center'}
            >
                our product
            </Box>
            <Box sx={{ display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                {data?.data && data?.data.products.map((product, index) => (
                    <Box key={product.id} sx={{flexBasis: '20%', margin: '0.5rem'}}>
                        <ProductCard />
                    </Box>
                ))}
            </Box>
        </>
    )
}
