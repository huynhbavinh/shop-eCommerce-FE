import Image from '../Image'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import sideImg from '../../assets/orthotic-friendly-shoes-side-img.webp'

export default function About() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ flexGrow: 3 }}>
                    <Image widthImg='100%' src={sideImg} />
                </Box>
                <Box
                    sx={{
                        maxWidth: '50%',
                        fontWeight: 'light',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Typography>
                        When we are born, most of us are born with perfectly-shaped feet. However, throughout our life, many of the shoes we wear tend to compress our feet and distort our natural foot shape. While orthotic[1]friendly shoes look like regular shoes, they are designed with ergonomics in mind to help us restore our foot health.
                        Orthotic-friendly shoes ensure that our feet are well protected. They include features such as a firm heel counter, firm midsole, wide foot support and toe box and more. Some brands also offer orthotic-friendly shoes with advanced technology.
                        Whether you are suffering from uncomfortable foot issues, are an athlete or simply like to walk a lot, you can guarantee that you will benefit from orthopaedic shoes!
                    </Typography>
                    <Button sx={{
                        boxShadow: 3,
                        background: '#D198AB',
                        color: 'white',
                        opacity: '0.8',
                        transition: '0.3s',
                        ":hover": {
                            opacity: '1',
                            background: '#ba8999',
                        },
                        width: '100%',
                        margin: '0.5rem 0'
                    }}>
                        <Box
                            component={'h2'}
                            sx={{ padding: '0.2rem 1rem' }}
                        >View All Products</Box>
                    </Button>
                </Box>
            </Box>
        </>
    )
}
