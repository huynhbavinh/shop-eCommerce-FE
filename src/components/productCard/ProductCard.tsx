import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './productCard.css'
import { Box, Button } from '@mui/material';

import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function MediaCard() {
    return (
        <Card
            sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', }}
            className='card'
        >
            <CardMedia
                sx={{
                    height: 200,
                }}
                image="https://picsum.photos/seed/picsum/200/200"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Product Title
                </Typography>
                <Typography variant="body2" color="text.secondary" marginBottom={'0.2rem'}>
                    Product Descriptions: Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div">
                    Product Prices $
                </Typography>
            </CardContent>
            <Box className={'info'}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <Button variant="contained" color='inherit'
                        sx={{
                            width: '70%', textTransform: 'capitalize', backgroundColor: 'whitesmoke', color: '#D198AB',
                        }}>
                        Add To Cart
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <Box typography={'light'}
                        sx={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', cursor: 'pointer',
                            ":hover": {
                                color:'#1c9fe3'
                            }
                        }}>
                        <ShareOutlinedIcon /><Box sx={{ marginLeft: '0.2rem' }}>Share</Box>
                    </Box>
                    <Box typography={'light'}
                        sx={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', cursor: 'pointer',
                            ":hover": {
                                color:'#1c9fe3'
                            }
                        }}>
                        <InfoOutlinedIcon /><Box sx={{ marginLeft: '0.2rem' }}>Info</Box>
                    </Box>
                    <Box typography={'light'}
                        sx={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center', cursor: 'pointer',
                            ":hover": {
                                color:'#1c9fe3'
                            }
                        }}>
                        <FavoriteBorderOutlinedIcon /><Box sx={{ marginLeft: '0.2rem' }}>Like</Box>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}