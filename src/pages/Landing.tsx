import Container from '@mui/material/Container';
import Box from '@mui/material/Box'

import Banner from './Banner';
import About from './About';

export default function Landing() {

    return (
        <>
            <Container maxWidth='xl'>
                <Box id='banner-page' sx={{ marginTop: '1rem' }}>
                    <Banner />
                </Box>
                <Box id='about-page' sx={{ marginTop: '1rem' }}>
                    <About />
                </Box>
            </Container>
        </>
    )
}
