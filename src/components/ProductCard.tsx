import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <Card
            sx={{ boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', }}
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
                    Product Prices
                </Typography>
            </CardContent>
        </Card>
    );
}