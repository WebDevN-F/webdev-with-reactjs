import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const ImageListPixabay = ({ data, loading }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.up('md'));

    const [image, setImage] = React.useState({
        title: '',
        srcCurrent: '',
        open: false,
    })
    const zoomIn = (tag, url) => {
        console.log('zoomIn', url)
        setImage((prevState) => ({
            ...prevState,
            title: tag,
            srcCurrent: url,
            open: true,
        }))
    }

    const closeDiaglog = () => {
        setImage((prevState) => ({
            ...prevState,
            title: '',
            srcCurrent: '',
            open: false,
        }))
    }

    return (
        <>
            {loading && <p>loading...</p>}
            {
                !loading && <>
                    {
                        data && data.hits && data.hits.length > 0 ? (
                            <Box sx={{ width: '100%', minHeight: 450 }}>
                                {/* <ImageList variant="masonry" cols={6} gap={8}>
                                    {data.hits.map((item) => (
                                        <ImageListItem key={item.id}>
                                            <img
                                                src={`${item.previewURL}`}
                                                srcSet={`${item.largeImageURL}`}
                                                alt={item.tags}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar position="below" title={item.user} />
                                        </ImageListItem>
                                    ))}
                                </ImageList> */}
                                <ImageList variant="masonry" cols={6} gap={8}>
                                    {data.hits.map((item) => (
                                        <ImageListItem key={item.id}>
                                            <img
                                                src={`${item.previewURL}`}
                                                srcSet={`${item.largeImageURL}`}
                                                alt={item.title}
                                                loading="lazy"
                                            />
                                            <ImageListItemBar
                                                title={item.tags}
                                                subtitle={item.user}
                                                actionIcon={
                                                    <IconButton
                                                        sx={{ color: 'rgba(255, 255, 255, 0.54)', mt: '0!important' }}
                                                        aria-label={`info about ${item.tags}`}
                                                        onClick={() => zoomIn(item.tags, item.largeImageURL)}
                                                    >
                                                        <ZoomInIcon />
                                                    </IconButton>
                                                }
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Box>
                        ) : (<p>No Image</p>)
                    }
                    <Dialog open={image.open} fullScreen={fullScreen} onClose={closeDiaglog} maxWidth={false} fullWidth={true}>
                        <DialogTitle id="responsive-dialog-title">
                            {image.title}
                        </DialogTitle>
                        <DialogContent>
                            <img
                                src={`${image.srcCurrent}`}
                                loading="lazy"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={closeDiaglog}>
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            }
        </>
    )
}

export default ImageListPixabay