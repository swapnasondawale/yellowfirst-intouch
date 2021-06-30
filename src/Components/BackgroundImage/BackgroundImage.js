import React, { useEffect, useState } from 'react';
import desktopOne from '../Assets/Images/bgDesktopOne.jpg';
import desktopTwo from '../Assets/Images/bgDesktopTwo.jpg';
import desktopThree from '../Assets/Images/bgDesktopThree.jpg';
import mobileOne from '../Assets/Images/bgMobileOne.jpg';
import mobileTwo from '../Assets/Images/bgMobileOne.jpg';
import mobileThree from '../Assets/Images/bgMobileOne.jpg';
import tabletOne from '../Assets/Images/bgTabletOne.jpg';
import tabletTwo from '../Assets/Images/bgTabletOne.jpg';
import tabletThree from '../Assets/Images/bgTabletOne.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '768px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '768px',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '966px',
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            height: '100vh',
        },
    },
    bgImg: {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100vh',
        },
        [theme.breakpoints.up('xs')]: {
            width: '100%',
            height: '768px',
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            height: '966px',
        },
        [theme.breakpoints.up('xl')]: {
            width: '100%',
            height: '100vh',
        },
    }
}));
function BackgroundImage() {
    const classes = useStyles();
    const desktopImages = [desktopOne, desktopTwo, desktopThree];
    const mobileImages = [mobileOne, mobileTwo, mobileThree];
    const tabletImages = [tabletOne, tabletTwo, tabletThree];
    const [width, setWidth] = useState(window.innerWidth);
    const [images, setImages] = useState(desktopImages);
    
    useEffect(() => {
        window.addEventListener("resize",
            () => {
                setWidth(window.innerWidth)
                if (window.innerWidth > 768) {
                    setImages(desktopImages)
                } else if (window.innerWidth >= 425 && window.innerWidth <= 768) {
                    setImages(tabletImages)
                } else if (window.innerWidth <= 425) {
                    setImages(mobileImages)
                }
            }, true);

        let image = document.getElementById('bg-image')
        setInterval(function () {
            let random = Math.floor(Math.random() * images.length);
            image.src = images[random];
        }, 3000)
    })
    return (
        <div className={classes.root}>
            { width ?
                <img src='bg-image' id='bg-image' alt='Backgorund...' loading='eager' className={classes.bgImg} />
                : null
            }
        </div>
    )
}
export default BackgroundImage
