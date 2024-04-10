import Box from '@mui/material/Box'

type ImgProps = {
    widthImg: string,
    src: string,
    alt: string,
}

export default function Image(props: ImgProps) {
    return (
        <Box component={'div'} >
            <img style={{ width: props.widthImg }} src={props.src} alt={props.alt} />
        </Box>
    )
}
