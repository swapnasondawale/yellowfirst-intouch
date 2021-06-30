import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { withRouter } from 'react-router';
import carouselOne from '../Assets/Images/corouselOne.jpg';
import carouselTwo from '../Assets/Images/corouselTwo.jpg';
import carouselThree from '../Assets/Images/corouselThree.jpg';
const useStyles = makeStyles((theme) => ({
    carouselContainer: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black'
    },
    mainLanding: {
        width: '100vw',
        height: '100vh'
    },
    innerDiv: {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        alignItems: 'center'
    },
    // imgContainer: {
    //     width: '100vw',
    //     height: '100vh',
    // },
    imgContent: {
        width: '100vw',
        height: '100vh',
        position: 'relative'
    },
    footerContainer: {
        width: '100%',
        height: '100%',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'absolute'
    },
    headContent: {
        display: 'grid',

    },
    headLine: {
        width: '50vw',
        height: '100%',
        margin: 'auto',
        backgroundColor: '#fff',
        borderRadius: '4px',
        alignContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '50vw',
            height: '100%',
            margin: 'auto',
            backgroundColor: '#fff',
            borderRadius: '4px',
            alignContent: 'center',
            fontSize: '20px'
        },
    },
    indicatorDiv: {

    },
    slideDiv: {
        // position: 'absolute'
    }
}))


const carouselImages = [
    {
        title: 'Thank You For Subscribing..!',
        carouselImage: carouselOne
    },
    {
        title: 'Thank You For Subscribing..!',
        carouselImage: carouselTwo
    },
    {
        title: 'Thank You For Subscribing..!',
        carouselImage: carouselThree
    },
]

function LandingPage() {
    const classes = useStyles();
    const [autoPlay, setAutoPlay] = useState(true);
    const [animation, setAnimation] = useState('slide');
    const [indicators, setIndicators] = useState(true);
    const [timeout, setTimeout] = useState(1000);
    const [navButtonsAlwaysVisible, setNavButtonsAlwaysVisible] = useState(false);
    const [navButtonsAlwaysInvisible, setNavButtonsAlwaysInvisible] = useState(false);


    const toggleAutoPlay = () => {
        setAutoPlay(!autoPlay)
    }

    const toggleIndicators = () => {
        setIndicators(!indicators)
    }

    const toggleNavButtonsAlwaysVisible = () => {
        setNavButtonsAlwaysVisible(!navButtonsAlwaysVisible)
    }

    const toggleNavButtonsAlwaysInvisible = () => {
        setNavButtonsAlwaysInvisible(!navButtonsAlwaysInvisible)
    }

    const changeAnimation = (event) => {
        setAnimation(event.target.value)
    }

    const changeTimeout = (event, value) => {
        setTimeout(value)
    }
    return (
        <div className={classes.mainLanding}>
            <Carousel
                className={classes.carouselContainer}
                autoPlay={toggleAutoPlay}
                animation={animation}
                indicators={toggleIndicators}
                timeout={timeout}
                navButtonsAlwaysVisible={toggleNavButtonsAlwaysVisible}
                navButtonsAlwaysInvisible={toggleNavButtonsAlwaysInvisible}
            >
                {
                    carouselImages.map((item, index) => {
                        return (

                            <div className={classes.innerDiv} key={item.title}>
                                <div className={classes.imgContainer}>
                                    <img className={classes.imgContent} src={item.carouselImage} alt='' loading='eager' />
                                </div>
                                <div className={classes.footerContainer}>
                                    <div className={classes.headContent}>
                                        {/* <h2 className={classes.headLine}>Thank You For Subscribing.....!</h2> */}
                                        <h2 className={classes.headLine}>{item.title}</h2>
                                    </div>
                                    <div className={classes.slideDiv}>
                                        <div className={classes.indicatorDiv}>{indicators}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
export default withRouter(LandingPage)