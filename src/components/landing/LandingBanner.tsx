import Image from '../Image'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import banner from '../../assets/orthotic-friendly-shoes-banner.webp'
import useJumpToView from '../../hooks/useJumpToView'

export default function Banner() {
    const handleJumpToView = useJumpToView();
    return (
        <>
            <Image widthImg='100%' src={banner} />
            <Button sx={{
                boxShadow: 3,
                position: 'relative',
                bottom: '2.5rem',
                left: '9rem',
                background: 'white',
                color: '#D198AB',
                opacity: '0.8',
                transition: '0.3s',
                ":hover": {
                    background: 'whitesmoke',
                    opacity: '1'
                }
            }}>
                <Box
                    component={'h2'}
                    sx={{ padding: '0.2rem 1rem' }}
                    onClick={() => { handleJumpToView('about-page') }}
                >ABOUT US</Box>
            </Button>
        </>
    )
}
