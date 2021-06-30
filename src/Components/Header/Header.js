import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { Fade as Hamburger } from 'hamburger-react'
import logo from '../Assets/Images/logo.jpg'
import CustomDrawer from '../Drawer/CustomDrawer'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    headerContainer: {
        margin: 'auto',
        marginTop: '1px',
        width: '100%',
        height: '100%',
        // border: '1px solid blue',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            marginTop: '5px',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    },
    logoImg: {
        margin: 'auto',
        width: '400px',
        height: '80px',
        opacity: '1',
        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
            width: '100%',
            height: '60%',
            justifyContent: 'center'
        }
    },
    drawerComp: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
}))

function Header() {
    const classes = useStyles();
    const [isOpen, setOpen] = useState(false)
    return (
        <div className={classes.headerContainer}>
            <Grid container wrap="nowrap" direction='row' alignContent='center' justify='center' style={{ marginTop: '20px' }}>
                <Grid item container xs={10} >
                    <Grid item xs={6} align='left' >
                        <a href='https://intouch.fun'>
                            <img src={logo} alt='logo' className={classes.logoImg} />
                        </a>
                    </Grid>
                    <Grid item xs={6} align='right'>
                        <Hamburger toggled={isOpen} toggle={setOpen} direction='right' color="black" />
                    </Grid>
                </Grid>
            </Grid>
            <CustomDrawer className={classes.drawerComp} open={isOpen} setOpen={setOpen} />
        </div>
    )
}
export default Header