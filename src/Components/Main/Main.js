import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import BackgroundImage from '../BackgroundImage/BackgroundImage';
import Dashboard from '../Dashboard/Dashboard';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
        },
    },
    bgContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
            position: 'relative'
        },
    },
    bgComp: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '100%',
        }
    },
    dashContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        marginTop: '1%',
        display: 'grid',
        gridTemplateRows: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
            margin: ' auto',
            position: 'absolute',
        },
        [theme.breakpoints.up('xl')]: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            marginTop: '1%',
            display: 'grid',
            gridTemplateCplumns: 'auto',
        },

    }
}))
function Main() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} >
            <Grid item container className={classes.bgContainer}>
                <BackgroundImage className={classes.bgComp} loading='eager' />
            </Grid>
            <Grid item container className={classes.dashContainer}>
                <Dashboard />
            </Grid>
        </Grid>
    )
}
export default Main