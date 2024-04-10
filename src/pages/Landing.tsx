import Container from '@mui/material/Container';
import Box from '@mui/material/Box'

import Banner from '../components/landing/LandingBanner';
import About from '../components/landing/LandingAbout';
import LandingProduct from '../components/landing/LandingProduct';

export default function Landing() {

    return (
        <>
            <Container maxWidth='xl'>
                <Box id='banner-row' sx={{ marginTop: '1rem' }}>
                    <Banner />
                </Box>
                <Box id='about-row' sx={{ marginTop: '1rem' }}>
                    <About />
                </Box>
                <Box id='about-row' sx={{ marginTop: '1rem' }}>
                    <LandingProduct />
                </Box>
            </Container>
        </>
    )
}
