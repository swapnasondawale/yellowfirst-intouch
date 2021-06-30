import React from 'react';
import Header from '../Header/Header';
import SocialMediaList from '../SocialMediaList/SocialMediaList';
import Subscribe from '../Subscribe/Subscribe';
import TimerClock from '../TimerClock/TimerClock';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    dashboardContainer: {
        width: '100%',
        height: 'auto',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: 'auto',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: 'auto',
            margin: 'auto',
            display: 'grid',
            gridTemplateRows: 'auto',
        }
    },
    labelContainer: {
        paddingBottom: '10px',
        alignContent: 'center',
        [theme.breakpoints.down('sm')]: {
            paddingBottom: '10px',
            alignContent: 'center',
            width: '100%',
            height: '100%'
        }
    },
    labelContainerH: {
        fontSize: '60px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        }
    },
    headerComp: {
        width:'100%',
        height:'100%'
    }
}))
function Dashboard() {
    const classes = useStyles();
    return (
        <Grid className={classes.dashboardContainer}>
            <div className={classes.headerComp}> <Header /> </div>

            <div className={classes.labelContainer}>
                <h1 className={classes.labelContainerH}>We Are Coming Soon!</h1>
                <p>Our webiste is opening soon.Please register to notify you when it's ready!</p>
            </div>
            <div> <TimerClock /></div>
            <div> <Subscribe /> </div>
            <div><SocialMediaList /></div>
        </Grid>
    )
}

export default Dashboard